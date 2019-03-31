# import requests
# from bs4 import BeautifulSoup

# base_url = 'https://www.tripadvisor.com/'  ## we need this to join the links later ##
# #main_page = 'https://www.tripadvisor.com/Attractions-g255057-Activities-oa{}-Canberra_Australian_Capital_Territory-Hotels.html#ATTRACTION_LIST_CONTENTS'
# main_page = 'https://www.tripadvisor.com/Attractions-g28953-Activities-New_York.html#ATTRACTION_LIST_CONTENTS'
# links = []


# ## get the initial page to find the number of pages ##
# r = requests.get(main_page.format(0))  
# soup = BeautifulSoup(r.text, "html.parser")
# ## select the last page from the list of pages ('a', {'class':'pageNum taLnk'}) ##
# last_page = max([ int(page.get('data-offset')) for page in soup.find_all('a', {'class':'pageNum taLnk'}) ])

# ## now iterate over that range (first page, last page, number of links), and extract the links from each page ##
# for i in range(0, last_page + 30, 30):
#     page = main_page.format(i)
#     soup = BeautifulSoup(requests.get(page).text, "html.parser") ## get the next page and parse it with BeautifulSoup ##  
#     ## get the hrefs from ('div', {'class':'listing_title'}), and join them with base_url to make the links ##
#     links += [ base_url + link.find('a').get('href') for link in soup.find_all('div', {'class':'listing_title'}) ]

# for link in links : 
#     print(link)
import requests
import re
from bs4 import BeautifulSoup
from urllib.request import urlopen



with requests.Session() as session:
    for offset in range(0, 1050, 30):
        url ='https://www.tripadvisor.com/Restaurants-g60763-New_York_City_New_York.html'.format(offset)

        soup = BeautifulSoup(session.get(url).content, "html.parser")
        output = open("soup.txt","w")
        s = str(soup)
        output.write(s)
        for link in soup.select('img'):
        	if(link.get('src') != None and link.get('src') != "https://static.tacdn.com/img2/x.gif"):
	        	iurl = link.get('src')
	        	print(iurl) 
#places to eat
	#
#placeses to see
#things to do
#transportation
#itinerary