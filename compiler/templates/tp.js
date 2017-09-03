/**
 * Created by NAVEENCHANDRA on 03-09-2017.
 */
function getSource() {
    return editor.getSession().getValue()
}
function getHashkey() {
    return current_url = document.URL, key = current_url.split("=")[1], key
}
function load(a) {
    show_loader(), this_digest = a, $.ajax({
        url: "/code/",
        async: !0,
        type: "POST",
        data: {digest: a},
        success: function (a) {
            var b = JSON.parse(a), c = b.source, d = b.filename, e = b.lang, f = b.isreadonly, g = b.isdefault,
                h = b.share_digest, i = b.code_run_count, j = b.clone_count, k = b.date_last_saved, l = b.last_output,
                m = b.video_url;
            l != "" && $(".output").html(l).show(), is_code_loaded = !0, isreadonly_global = f, $(".code-run-count-msg").html("Run Count: "), $(".code-run-count-value").html(i), $(".count-clone").html(j), k != "" && ($(".date-last-saved-msg").html("Last Saved: "), $(".date-last-saved-value").html(k)), last_edited_source = c, g == 1 ? load_default_code = !0 : $("#save-code").html("Saved"), $("#file-name").html(d), document.title = d + " | " + document.title;
            var n = $(window).height() - 270;
            n < 600 && (n = 600), $("#editor").parent().css("height", n + 36 + "px"), $("#editor").css("height", n + "px"), editor = ace.edit("editor"), editor.setShowPrintMargin(!1), editor.commands.bindKeys({
                "ctrl-l": null,
                "ctrl-r": null
            }), setSelectValue("lang", e), set_langMode(e, editor), editor.setTheme("ace/theme/crimson_editor"), autocomplete_options = {
                enableBasicAutocompletion: !0,
                enableSnippets: !0
            }, LAB_FEATURE_MAP.LC && (autocomplete_options.enableLiveAutocompletion = !0), editor.setOptions(autocomplete_options);
            if (typeof sharejs == "undefined") is_default_code_being_set = !0, editor.getSession().setValue(c), source_loaded = !0, editor.getSession().on("change", on_session_edit()), is_default_code_being_set = !1; else {
                var o = $("#http-host").text();
                sharejs.open(h, "text", o + "/channel", function (a, b) {
                    b.attach_ace(editor), is_default_code_being_set = !0, editor.getSession().setValue(c, -1), source_loaded = !0, editor.getSession().on("change", on_session_edit()), is_default_code_being_set = !1
                })
            }
            f == 1 && (editor.setReadOnly(!0), $("#lang").attr("disabled", !0), document.getElementById("file-name").title = "Read-only code. Clone to edit", addAlert("This is Read-Only code. Clone to edit."));
            if (m != "") {
                var p = $(".code-video-url")[0];
                p.href = m, $(".code-video-url").show(), $(".code-video-error-msg").hide()
            } else share_code_video();
            document.getElementById("test-input").value = "", hide_loader()
        }
    })
}
function run(a) {
    var b = getSource();
    if (b == "" || b == null)return addAlert("Nothing to run!"), !1;
    $(".dots-loader").show(), $(".error-output").hide(), $(".output").hide();
    if ($("#test-input-checkbox").is(":checked"))var c = $("#test-input").val();
    var d = getSelectValue("lang"), e = getHashkey();
    $("#run-code").attr("disabled", "disabled"), $("#run-code").addClass("running"), $.ajax({
        url: "/trun/",
        async: !0,
        type: "POST",
        dataType: "json",
        data: {digest: a, source: b, input: c, lang: d, key: e},
        success: function (a) {
            load_default_code = !1;
            var c = a.html, d = a.url, e = $(".output"), f = a.run_count;
            $(".code-run-count-value").html(f), b != last_saved_source && (last_saved_source = b, animate_save(!0)), $(".dots-loader").hide(), e.html(c), e.show(), $("#run-code").removeAttr("disabled"), $("#run-code").removeClass("running"), d !== null && (timeout_fetch = setTimeout(function () {
                fetch_response(d, e)
            }, 500))
        },
        error: function (a) {
            $(".error-output").html("There was some transient error. Please try again!"), $(".error-output").show(), $(".output").hide(), $(".dots-loader").hide(), $("#run-code").removeAttr("disabled"), $("#run-code").removeClass("running")
        }
    })
}
function fetch_response(a, b) {
    $.ajax({
        type: "POST", url: a, success: function (c) {
            var d = b.attr("replaceData");
            if (typeof d == "undefined" || d !== "true") {
                var e = b.find("[replaceData=true]"), f = b.find("[replaceData=false]");
                if (f.length > 0 && e.length === 0) {
                    console.log("Not replacing with new data!"), clearTimeout(timeout_fetch);
                    return
                }
            }
            b.html(c), b.parent().show(), timeout_fetch = setTimeout(function () {
                fetch_response(a, b)
            }, 500)
        }
    })
}
function auto_save() {
    if (load_default_code || is_being_saved || is_default_code_being_set || !source_loaded)return !1;
    var a = getSource();
    if (a == last_saved_source)return !1;
    $("#save-code").html("Saving...");
    var b = getSelectValue("lang"), c = getHashkey();
    is_being_saved = !0, $.ajax({
        url: "/save/",
        async: !0,
        type: "POST",
        data: {digest: this_digest, source: a, lang: b, key: c},
        success: function (b) {
            load_default_code = !1;
            var c = JSON.parse(b), d = c.status, e = c.date_last_saved;
            animate_save(d), $(".date-last-saved-msg").html("Last Saved: "), $(".date-last-saved-value").html(e), last_saved_source = a, is_being_saved = !1, setup_video_util(this_digest, getSelectValue("lang"))
        }
    })
}
function save(a) {
    var b = getSource();
    show_loader(), $("#save-code").html("Saving...");
    var c = getSelectValue("lang"), d = getHashkey();
    $.ajax({
        url: "/save/",
        async: !0,
        type: "POST",
        data: {digest: a, source: b, lang: c, key: d},
        success: function (a) {
            var c = JSON.parse(a), d = c.status, e = c.date_last_saved;
            animate_save(d), d == 1 && (last_saved_source = b, load_default_code = !1), $(".date-last-saved-msg").html("Last Saved: "), $(".date-last-saved-value").html(e), hide_loader()
        }
    })
}
function savefilename(a, b) {
    var c = getSource(), d = getSelectValue("lang");
    show_loader(), $.ajax({
        url: "/savefilename/",
        async: !0,
        type: "POST",
        data: {digest: a, filename: b, source: c, lang: d},
        success: function (a) {
            var c = JSON.parse(a), d = c.status, e = c.msg;
            addAlert(e);
            if (d == 0) $(".filename-text").addClass("hidden"), $("#file-name").removeClass("hidden"); else {
                $(".filename-text").addClass("hidden"), $("#file-name").removeClass("hidden").html(b);
                var f = document.title, g = f.split("|");
                g[0] = b + " ", document.title = g.join("|"), load_default_code = !1
            }
            animate_save(d), hide_loader()
        }
    })
}
function clone(a) {
    if (load_default_code == 1)return addAlert("Edit/Save/Run the code at least once before cloning!"), !1;
    show_loader();
    var b = getSource(), c = getSelectValue("lang");
    $.ajax({
        url: "/clone/", async: !0, type: "POST", data: {digest: a, source: b, lang: c}, success: function (a) {
            var b = JSON.parse(a), c = b.newurl;
            hide_loader(), addAlert("Redirecting to cloned code"), window.location.replace(c)
        }
    })
}
function share(a) {
    if (load_default_code == 1)return $(".share-url-error-msg").show(), $(".share-url-error-msg").html("Edit/Save/Run the code at least once before sharing!"), !1;
    if (read_only_url != "" || read_write_url != "")return show_share_url(), !1;
    show_loader(), $.ajax({
        url: "/share/", async: !0, type: "POST", data: {digest: a}, success: function (b) {
            var c = JSON.parse(b);
            c.ro_link != "No public url." && (read_only_url = c.ro_link), c.rw_link && (read_write_url = c.rw_link), show_share_url(a), hide_loader()
        }
    })
}
function show_share_url(a) {
    var b = document.getElementsByName("read-only")[0].checked, c = document.getElementsByName("read-write")[0].checked;
    if (b) {
        $(".share-url-error-msg").html(""), $(".share-url-error-msg").hide();
        if (read_only_url != "") {
            $(".result-read-only-msg").show();
            var d = $(".result-read-only-url")[0];
            d.innerHTML = read_only_url, d.href = read_only_url
        } else private_to_public(a)
    } else {
        var d = $(".result-read-only-url")[0];
        d.innerHTML = "", d.href = "", $(".result-read-only-msg").hide()
    }
    if (c)if (read_write_url != "") {
        var d = $(".result-read-write-url")[0];
        d.innerHTML = read_write_url, d.href = read_write_url, $(".result-read-write-msg").show(), b == 0 && ($(".share-url-error-msg").html(""), $(".share-url-error-msg").hide())
    } else {
        $(".share-url-error-msg").show(), $(".share-url-error-msg").html("No Access to Read write code");
        var d = $(".result-read-write-url")[0];
        d.innerHTML = "", d.href = "", $(".result-read-write-msg").hide()
    } else {
        var d = $(".result-read-write-url")[0];
        d.innerHTML = "", d.href = "", $(".result-read-write-msg").hide()
    }
    b == 0 && c == 0 && ($(".share-url-error-msg").show(), $(".share-url-error-msg").html("Choose URL preference"))
}
function share_code_video() {
    if (is_code_video_set) {
        var a = $(".code-video-url")[0];
        a.href = getCodeVideoUrl(), $(".code-video-url").show(), $(".code-video-error-msg").hide()
    } else $(".code-video-error-msg").html("Edit the code atleast once to get code video").show(), $(".code-video-url").hide()
}
function private_to_public(a) {
    $.ajax({
        url: "/privatetopublic/", async: !0, type: "POST", data: {digest: a}, success: function (a) {
            var b = JSON.parse(a);
            console.log(b);
            var c = b.status, d = b.msg;
            if (c) {
                $(".result-read-only-msg").show();
                var e = $(".result-read-only-url")[0];
                e.innerHTML = d, e.href = d, read_only_url = d
            } else $(".share-url-error-msg").show(), $(".share-url-error-msg").html(d)
        }
    })
}
function load_default(a) {
    show_loader(), $.ajax({
        url: "/sample/", type: "POST", async: "true", data: {lang: a}, success: function (b) {
            is_default_code_being_set = !0, editor.getSession().setValue(b), source_loaded = !0, last_edited_source = b, set_langMode(a, editor), is_default_code_being_set = !1, hide_loader()
        }
    })
}
function change_theme(a) {
    editor.setTheme(a)
}
function set_langMode(a, b) {
    var c = null, d = b.getSession(), c = null, e = null;
    try {
        a == "C" ? (c = require("ace/mode/c_cpp").Mode, e = c_completer) : a == "CPP" || a == "CPP11" ? (c = require("ace/mode/c_cpp").Mode, e = cpp_completer) : a == "PYTHON" ? (c = require("ace/mode/python").Mode, e = python_completer) : a == "PYTHON3" ? c = require("ace/mode/python").Mode : a == "PERL" ? (c = require("ace/mode/perl").Mode, e = perl_completer) : a == "PASCAL" ? (c = require("ace/mode/pascal").Mode, e = pascal_completer) : a == "JAVA" || a == "JAVA8" ? (c = require("ace/mode/java").Mode, e = java_completer) : a == "RUBY" ? (c = require("ace/mode/ruby").Mode, e = ruby_completer) : a == "GO" ? (c = require("ace/mode/golang").Mode, e = go_completer) : a == "PHP" ? (c = require("ace/mode/php").Mode, e = php_completer) : a == "CSHARP" || a == "FSHARP" ? (c = require("ace/mode/csharp").Mode, e = csharp_completer) : a == "HTML" ? c = require("ace/mode/html").Mode : a == "CSS" ? c = require("ace/mode/css").Mode : a == "JAVASCRIPT" || a == "JAVASCRIPT_UI" || a == "JAVASCRIPT_NODE" ? c = require("ace/mode/javascript").Mode : a == "HASKELL" ? (c = require("ace/mode/haskell").Mode, e = haskell_completer) : a == "CLOJURE" ? (c = require("ace/mode/clojure").Mode, e = clojure_completer) : a == "SCALA" ? (c = require("ace/mode/scala").Mode, e = scala_completer) : a == "TEXTFILE" ? c = require("ace/mode/html").Mode : a == "BEFUNGE" || a == "LOLCODE" || a == "WHENEVER" ? c = require("ace/mode/c_cpp").Mode : a == "OBJECTIVEC" ? (c = require("ace/mode/objectivec").Mode, e = objectivec_completer) : a == "LISP" || a == "RACKET" || a == "LISP_SBCL" ? (c = require("ace/mode/lisp").Mode, e = lisp_completer) : a == "R" ? (c = require("ace/mode/r").Mode, e = r_completer) : a == "RUST" ? (c = require("ace/mode/rust").Mode, e = rust_completer) : a == "LUA" ? c = require("ace/mode/lua").Mode : a == "GROOVY" ? c = require("ace/mode/groovy").Mode : a == "D" ? c = require("ace/mode/d").Mode : a == "ERLANG" ? c = require("ace/mode/erlang").Mode : a == "JULIA" ? c = require("ace/mode/julia").Mode : a == "OCAML" ? c = require("ace/mode/ocaml").Mode : a == "OCTAVE" ? c = require("ace/mode/matlab").Mode : a == "SWIFT" && (c = require("ace/mode/swift").Mode), d.setMode(new c), e && AutoComplete.addCompleter(e)
    } catch (f) {
    }
}
function show_tips(a) {
    var b = $("#tips-html").html();
    return $("#tips-dialog").html(b), $("#tips-dialog").dialog({width: 730}, {height: 520}, {zIndex: 9999999}, {title: "CodeTable Tips"}, {modal: !0}, {
        show: {
            effect: "drop",
            direction: "right"
        }
    }, {
        buttons: {
            "Got it!": function () {
                $(this).dialog("close")
            }
        }
    }), !1
}
function animate_save(a) {
    a == 1 ? $("#save-code").html("Saved") : a == 0 ? $("#save-code").html("Error in saving") : $("#save-code").html("Save")
}
function getSelectValue(a) {
    var b = document.getElementById(a);
    for (var c = 0; c < b.childElementCount; c++) {
        var d = b.children[c];
        if (d.selected)return d.value
    }
}
function get_current_lang() {
    return getSelectValue("lang")
}
function setSelectValue(a, b) {
    var c = document.getElementById(a);
    for (var d = 0; d < c.childElementCount; d++) {
        var e = c.children[d];
        if (e.value == b) {
            e.selected = !0;
            break
        }
    }
}
function show_loader() {
    $(".ajax-loader").show()
}
function hide_loader() {
    $(".ajax-loader").hide()
}
function open_dialog_public_link(a) {
    var b = "http://code.hackerearth.com/" + a;
    addAlert("Public link (Read-Only): <a href='" + b + "' target='_blank' style='text-decoration:none;'>" + b + "</a>")
}
function setup_video_util(a, b) {
    if (is_code_video_beign_set || is_code_video_set)return;
    is_code_video_beign_set = !0;
    var c = {video_type: getCodeVideoType(), digest: a, lang: b}, d = function (a) {
        if (a.status == "OK") {
            is_code_video_set = !0, is_code_video_being_set = !1;
            var b = a.code_video_id, c = a.code_video_uuid;
            code_player = new CodePlayer(b), code_player.uuid = c;
            for (var d = 0; d < pending_changesets.length; d++)code_player.enqueue_changeset(pending_changesets[d], pending_sources[d]), code_player.start_recording();
            pending_changesets = [], pending_sources = [], editor.getSession().on("change", get_session_edit_handler()), $(".code-video-url").css("display") == "none" && share_code_video()
        }
    };
    setup_video(c, d)
}
function on_session_edit() {
    return function (a) {
        is_default_code_being_set || (load_default_code = !1, is_code_video_set || (pending_sources.push(last_edited_source), pending_changesets.push(a), last_edited_source = getSource()));
        var b = $("#editor").height() * .069, c = editor.session.getLength()
    }
}
function get_session_edit_handler() {
    return function (a) {
        code_player.enqueue_changeset(a, last_edited_source), code_player.start_recording(), last_edited_source = getSource()
    }
}
function getCodeVideoType() {
    return $("#code-video-type").text()
}
function getCodeVideoUrl() {
    var a = window.location.href.split("/"), b = a[0], c = a[2], d = $("#code-player-url").text();
    return d[d.length - 2] == "/" && d[d.length - 1] == "/" && (d = d.slice(0, -1)), d += code_player.uuid + "/", b + "//" + c + d
}
function delete_digest_code(a, b) {
    if (load_default_code == 1)return addAlert("Edit/Save/Run the code atleast once before you delete!"), !1;
    if (!confirm("Are You sure to delete?"))return !1;
    show_loader(), console.log(b), $.ajax({
        url: b, async: !0, type: "POST", success: function (a) {
            hide_loader(), a == "Deleted" ? (addAlert("Code deleted. Redirecting to new code"), setTimeout(function () {
                window.location.replace("/")
            }, 3e3)) : addAlert("Some error occured")
        }
    })
}
var editor = null, this_digest = null, load_default_code = !1, is_being_saved = !1, is_default_code_being_set = !1,
    last_saved_source = null, code_player = null, is_code_video_set = !1, is_code_video_beign_set = !1,
    pending_changesets = [], pending_sources = [], last_edited_source = null, source_loaded = !1, newline = "<br>",
    is_code_loaded = !1, isreadonly_global = !0, read_only_url = "", read_write_url = "";
$("#lang").change(function () {
    load_default_code && load_default(getSelectValue("lang"))
});
var AutoComplete = require("ace/ext/language_tools");
$("#test-input-checkbox").click(function () {
    $("#test-input-checkbox").is(":checked") ? $(".test-input-container").show(500) : $(".test-input-container").hide(200)
}), $(document).ready(function () {
    $("#test-input").watermark("Write your inputs to program.."), $("#file-name").click(function () {
        if (is_code_loaded == 1 && isreadonly_global == 1)return addAlert("This is Read-only Code. Clone to edit"), !1;
        var a = $(this).html();
        $(this).addClass("hidden"), $(".filename-text").removeClass("hidden");
        var b = document.getElementsByName("filename")[0];
        b.value = a
    }), $(".filename-cancel").click(function () {
        $(".filename-text").addClass("hidden"), $("#file-name").removeClass("hidden")
    }), $(".filename-save").click(function () {
        var a = document.getElementsByName("filename")[0].value;
        a == "" || a == null ? (addAlert("Document name can't be empty"), $(".filename-cancel").click()) : savefilename(this_digest, a)
    }), $(".read-only-text").click(function () {
        var a = document.getElementsByName("read-only")[0];
        a.checked = !a.checked
    }), $(".read-write-text").click(function () {
        var a = document.getElementsByName("read-write")[0];
        a.checked = !a.checked
    }), $(".test-input-checkbox-text").click(function () {
        var a = document.getElementsByName("test-input-checkbox")[0];
        a.checked = !a.checked, $("#test-input-checkbox").is(":checked") ? $(".test-input-container").show(500) : $(".test-input-container").hide(200)
    })
});
var interval = setInterval(auto_save, 3e3);