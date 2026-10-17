HOMEWATERCONNECT WEBSITE PACKAGE
================================

WHAT IS INCLUDED
- Responsive, multi-page static website (22 HTML files including a custom 404 page)
- Homepage, service overview, six service pages, guides index, five homeowner guides, service areas, how it works, about, contact and legal pages
- Shared CSS and JavaScript; mobile navigation; click-to-call buttons
- ZIP-code checker scaffold that NEVER claims coverage when the approved ZIP list is empty
- Technical SEO basics: unique page titles/descriptions, canonical tags, Open Graph metadata, sitemap.xml, robots.txt, descriptive internal links and limited, relevant structured data
- Custom SVG favicon and social-share graphic

IMPORTANT BEFORE PUBLISHING
1. Domain used in canonical tags, sitemap.xml, robots.txt and social URLs is currently https://homewaterconnect.com. This is a proposed brand/domain, not a verified purchase. If you buy a different domain, replace every occurrence of homewaterconnect.com with the exact domain you own, then check all canonical and sitemap URLs.
2. Add ONLY MarketCall-approved ZIP codes to assets/coverage-zips.js. Format: window.HWC_APPROVED_ZIPS = ["10001", "10002"];
   Until the list is added, the checker directs visitors to call to confirm coverage. Do not use a guessed ZIP list.
3. Confirm with MarketCall that this exact website, brand and phone routing number are approved for the offer before sending traffic. The offer says pre-approval is required and static RTB only; obtain the precise routing/integration requirements from your manager rather than guessing.
4. Phone number displayed is +1 (855) 321-3117 and tel link is tel:+18553213117. Test an actual call and confirm routing before publication.
5. Review the Privacy Policy, Terms and site ownership disclosures against the real legal operator and actual data/call-routing tools. The current site has no form, account, analytics pixel or ad pixel by default. Add a real privacy contact method before launch if required.
6. This site uses the proposed brand “HomeWaterConnect”. If the domain or brand changes, update titles, footer, legal wording, structured data and social metadata too.
7. Do not claim 24/7 service, same-day arrival, local offices, licenses, insurance, testimonials or guaranteed results unless independently verified and approved. This package intentionally avoids those claims.
8. Publish to the root of a custom domain (or adjust root-relative asset paths if hosting under a repository subdirectory). Then test mobile layouts, links, 404 handling, all tel links and ZIP checker.
9. Add the live site to Google Search Console, verify domain ownership and submit /sitemap.xml. Ranking is not guaranteed; use useful content and real performance data to improve it.

MANDATORY MARKETCALL DISCLAIMER
The full supplied disclaimer is included in the footer of every page and on /disclaimer/:
Disclaimer: HomeWaterConnect is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and HomeWaterConnect does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on HomeWaterConnect.

PHONE LINE HOURS
Monday–Sunday, 10:00 a.m.–2:00 a.m. Eastern Time (ET). These are the offer call-line hours supplied for this project, not a promise of provider arrival or 24-hour availability.


LOCAL PREVIEW (WINDOWS)
LOCAL PREVIEW (WINDOWS) — IMPORTANT
1. Extract the new ZIP into a normal folder (do not preview inside the ZIP).
2. In that extracted folder you should see index.html, assets, services, guides, and PREVIEW-WEBSITE.bat together.
3. Double-click PREVIEW-WEBSITE.bat. It serves this exact folder and opens http://localhost:8017/index.html. (Python must be installed.)
4. Keep the black server window open while browsing. Do not open the individual services/guides folders from the file listing; use the website navigation instead.
5. If the browser still shows “Index of …”, the server is running from the wrong folder. Close that server, then run PREVIEW-WEBSITE.bat in the folder that contains the main index.html and assets folder.

PATH FIX
Internal links and asset paths in this package are relative, so the site can work from a GitHub Pages project subpath as well as from a custom-domain web root. Before launch, update canonical URLs and sitemap/robots URLs to the actual domain, and add only the approved ZIP list.


VISUAL UPGRADE
- Premium navy / teal visual system, real stock photography from public Pexels CDN links, gentle reveal animations and responsive mobile layout are included.
- Image sources and license references are recorded in IMAGE-CREDITS.txt. Photos are illustrative and do not represent listed contractors.
- An internet connection is needed for the remote stock images. Core layout and styles are local to this package.
- Before launch, replace the placeholder domain in canonical URLs, Open Graph metadata, sitemap.xml and robots.txt with the purchased domain.
- Configure the actual MarketCall-approved ZIP list in assets/coverage-zips.js and have the offer owner approve the site and call routing before sending traffic.

PREVIEW PORT
The preview starts on port 8017 to avoid an older website still running on the usual port 8000. Close previous preview command windows before testing this package.
