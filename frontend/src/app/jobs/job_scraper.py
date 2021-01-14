import requests
from bs4 import BeautifulSoup

URL = 'https://www.cameroondesks.com/search/label/jobs?max-results=10'

page = requests.get(URL)

# print(page)

soup = BeautifulSoup(page.content, "html.parser")



# Look for available jobs
jobContainer = soup.find("div", class_="blog-posts hfeed")

# avail_jobs = jobContainer.find_all("div", class_="post hentry")
# print(avail_jobs)
actual_job = jobContainer.find_all("h2", class_="post-title entry-title")
print(actual_job)
