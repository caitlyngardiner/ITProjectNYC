import json
import operator

with open('response.json') as file: #opening json file
    data = json.load(file)

#sorting high to low number of review counts
data['businesses'].sort(key=operator.itemgetter('review_count'), reverse=True) 
for business in data['businesses']:
    print(business)
    
#writing to a new file 
with open('sortByRatings.json', 'w') as newFile:
    json.dump(data, newFile)