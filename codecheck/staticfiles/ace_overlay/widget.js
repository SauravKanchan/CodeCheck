(function () {

    // Try to use django-grapelli's jQuery, else fall back to the Django admin's one
    try {
        $ = grp.jQuery;
    } catch (err) {
        $ = django.jQuery;
    }

    function next(elem) {
        // Credit to John Resig for this function
        // taken from Pro JavaScript techniques
        do {
            elem = elem.nextSibling;
        } while (elem && elem.nodeType != 1);
        return elem;
    }

    function prev(elem) {
        // Credit to John Resig for this function
        // taken from Pro JavaScript techniques
        do {
            elem = elem.previousSibling;
        } while (elem && elem.nodeType != 1);
        return elem;
    }

    function init_widget(widget) {
        var mode = $(widget).attr("data-mode");
        var theme = $(widget).attr("data-theme");
        var wordwrap = $(widget).attr("data-wordwrap");
        var printmargin = $(widget).attr("data-showprintmargin");
        var textarea = $(widget).closest('.ace-overlay').find('textarea');

        // console.log("mode: "+mode+" theme: "+theme+" wordwrap: "+wordwrap+" printmargin: "+printmargin+" textarea: "+textarea)

        var editor = ace.edit(widget);
        editor.setTheme("ace/theme/" + theme);
        editor.getSession().setMode("ace/mode/" + mode);
        editor.getSession().setUseWrapMode(wordwrap);
        editor.setShowPrintMargin(printmargin);
        editor.setOptions({
            readOnly: false,
            highlightActiveLine: true,
            highlightGutterLine: false,
            enableEmmet: true
        });

        $(widget).closest('.ace-overlay').data('editor', editor);

        //initialize code container display...
        var value = $(widget).closest('.ace-overlay').find('textarea').val();
        renderAsCode($(widget).closest('.ace-overlay').find('.code-container'), value);
    }

    function escape_tags(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function renderAsCode(container, text) {
        var start = new Date().getTime(); // DEBUGGING
        var enumerated_text = '';
        var enumerated_source_list = text.split(/\r?\n/); // text.match(/[^\r\n]+/g);
        var counter = 1;
        for (var k = 0; k < enumerated_source_list.length; k++) {
            var line = enumerated_source_list[k];
            var new_line = "<div class='line'><span class='counter'>" + counter + "</span><span class='code'>" + escape_tags(line) + "</span></div>";
            enumerated_text += (new_line);
            counter += 1;
        }
        $(container).html(enumerated_text);

        //DEBUG:
        var end = new Date().getTime();
        var time = end - start;
        console.log('renderAsCode execution time: ' + time);
    }

    function addListeners() {
        $(".ace-overlay .edit").bind("click", function (event) {
            event.preventDefault();
            var overlay_container = $(this).closest('.ace-overlay').find('.overlay-container');
            var is_open = $(overlay_container).hasClass("open");
            if (is_open == false) {
                open_overlay(overlay_container);
            }
        });

        $(".ace-overlay .cancel").bind("click", function (event) {
            event.preventDefault();
            $('.ace-overlay').find('.overlay-container').removeClass('open');
        });

        $(".ace-overlay .cancel, .ace-overlay .backdrop").bind("click", function (event) {
            event.preventDefault();
            $('.ace-overlay').find('.overlay-container').removeClass('open');
        });

        $(".ace-overlay .save").bind("click", function (event) {
            event.preventDefault();
            close_overlay($(this).closest('.overlay-container'));
        });

        $(".ace-overlay .align.right").bind("click", function (event) {
            event.preventDefault();
            attempt_to_align(this, "right");
        });

        $(".ace-overlay .align.left").bind("click", function (event) {
            event.preventDefault();
            attempt_to_align(this, "left");
        });

        $(".ace-overlay .align.top").bind("click", function (event) {
            event.preventDefault();
            attempt_to_align(this, "top");
        });

        $(".ace-overlay .align.bottom").bind("click", function (event) {
            event.preventDefault();
            attempt_to_align(this, "bottom");
        });

        $(".ace-overlay .beautify").bind("click", function (event) {
            event.preventDefault();
            var overlay_container = $('.ace-overlay').find('.overlay-container');
            var editor = ace.edit($(overlay_container).find(".django-ace-widget")[0]);
            var text = editor.session.getValue();
            try {
                text = JSON.stringify(JSON.parse(text), undefined, 4);
            } catch (err) {
                text = js_beautify(text);
            }
            editor.session.setValue(text);
        });

        $(document).bind("keydown", function (event) {
            var is_escape_key = event.keyCode == 27;
            if (is_escape_key) {
                var open_overlays = $('.ace-overlay').find('.overlay-container.open');
                $(open_overlays).each(function (index, value) {
                    var save_button = $(value).closest('.ace-overlay').find(".save");
                    $(save_button).trigger("click");
                });
            }
        });
    }

    function open_overlay(overlay_container) {
        /* NOTE / HACK
         the reason that we re-intitialze and destroy the editor each time
         is that there is an issue with calling .getValue() multiple times on
         the editor; it causes a strange duplication issue.
         */
        init_widget($(overlay_container).find(".django-ace-widget")[0]);

        var overlay = $(overlay_container).closest('.ace-overlay');
        var value = $(overlay).find('textarea').val();
        $(overlay).data('editor').setValue(value, -1);
        $(overlay_container).addClass('open');

        var open_overlays = $('.overlay-container.open').not(overlay_container[0]);
        if (open_overlays.length > 0) {
            var first_overlay = open_overlays[0];
            var opposite_class = get_opposite_alignment(first_overlay);

            if (opposite_class == null) {
                apply_alignment(overlay_container, "left");
                apply_alignment(first_overlay, "right");
            } else {
                apply_alignment(overlay_container, opposite_class);
            }

            if (open_overlays.length > 1) {
                for (var k = 1; k < open_overlays.length; k++) {
                    // console.log("close remaining overlay ..."+k)
                    var overlay = open_overlays[k];
                    close_overlay(overlay);
                }
            }
        }
    }

    function close_overlay(overlay_container) {
        $(overlay_container).removeClass('open');
        var overlay = $(overlay_container).closest('.ace-overlay');

        /* NOTE / HACK
         the reason that we re-intitialze and destroy the editor each time
         is that there is an issue with calling .getValue() multiple times on
         the editor; it causes a strange duplication issue.
         */
        var value = $(overlay).data('editor').getValue();
        $(overlay).find('textarea').val(value);
        $(overlay).find('textarea').html(value);
        renderAsCode($(overlay).find('.code-container'), value);

        $(overlay).data('editor').destroy();
        $(overlay_container).find(".django-ace-widget").empty();

        $(overlay_container).find('a.align').removeClass("active");
        $(overlay_container).removeClass("right left top bottom");
    }

    function attempt_to_align(button, direction, inverse) {
        var isActive = $(button).hasClass("active");
        var overlay_container = $(button).closest('.overlay-container');

        if (isActive) {
            $(overlay_container).removeClass(direction);
            $(button).removeClass("active");
        } else {
            apply_alignment(overlay_container, direction)
        }

        //If there is another open container, set it to the inverse.
        var open_overlays = $('.overlay-container.open').not(overlay_container[0]);
        if (open_overlays.length > 0) {
            var first_overlay = open_overlays[0];
            var opposite_class = get_opposite_alignment(overlay_container);

            if (opposite_class == null) {
                close_overlay(first_overlay)
            } else {
                apply_alignment(first_overlay, opposite_class);
            }

            if (open_overlays.length > 1) {
                for (var k = 1; k < open_overlays.length; k++) {
                    // console.log("close remaining overlay ..."+k)
                    var overlay = open_overlays[k];
                    close_overlay(overlay);
                }
            }
        }
    }

    function apply_alignment(overlay_container, direction) {
        $(overlay_container).find('a.align').removeClass("active");
        $(overlay_container).removeClass("right left top bottom");
        $(overlay_container).addClass(direction);
        $(overlay_container).find("a.align." + direction).addClass("active");
    }

    function get_opposite_alignment(overlay_container) {
        if ($(overlay_container).hasClass("right")) {
            return "left";
        } else if ($(overlay_container).hasClass("left")) {
            return "right";
        } else if ($(overlay_container).hasClass("top")) {
            return "bottom";
        } else if ($(overlay_container).hasClass("bottom")) {
            return "top";
        }
        return null;
    }

    $(document).ready(function () {
        addListeners();
    });

})();
