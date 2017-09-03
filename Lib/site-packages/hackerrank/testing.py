from hackerrank.HackerRankAPI import HackerRankAPI

API_KEY = 'hackerrank|751319-994|d057e21968795c38201ca37d376201eff936f29b'

compiler = HackerRankAPI(api_key = API_KEY)

source ='''
N, M = map(int,raw_input().split()) 
for i in xrange(1,N,2): 
    print (".|."*i).center(M,'-')
    
print "WELCOME".center(M,'-')

for i in xrange(N-2,-1,-2): 
    print (".|."*i).center(M,'-') 
'''

result = compiler.run({'source': source,
                       'lang':'python',
                       'testcases':["9 27"]
                       })
print(result.output[0])
