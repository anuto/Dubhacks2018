# SnapTrack

Our project: [https://www.SNAPtrackapp.com](https://www.SNAPtrackapp.com)

Despite the fact that receiving SNAP aid requires being near the federal poverty level in most states, we found that this community is somewhat underserved by tech.  One possible reason for this might be an assumption that low-income indivudals don't own phones frequently enough for a tech based service to be useful. However the [http://www.pewinternet.org/fact-sheet/mobile/](Pew Research Center) found that at least 67% of individuals at or below the federal poverty line own smart phones, so we believe this is not a valid reason. We only found one app serving this issue: it consolidates coupons, jobs, and allows users to check their EBT balance (in most states). We believe that there are other resources that tech can provide. Our website's features include:

* up-to-date information on stores near you that accept SNAP benefits (data from the US government, late updated on 10/02/18. Information displayed on a map using the `Google Maps API`)
* information on what items are eligible for purchase with SNAP benefits (based on regulations set by the government restricting use on hot foods, alcoholic beverages, and vitamins / supplements). Search was implemented with `Algolia's API`. Food list came from the USDA.

We ran into credentials isssues with the `Google Cloud Vision API` that we and Google mentors were unable to diagnose. This prevented us from fulling implementing the crux of our website:

* crowd-sourcing data from users to get up-to-date grocery prices for various stores. Ideally users would take and upload pictures of their receipts, and we would use Google Vision to turn this into textual information. Then we would mantain a database of current prices on various items.

In the future, we would like to also extend this website by:

* fixing the broken Google Vision aspect
* improving service towards disabled and/or elderly users. We wanted to include delivery information, but the only API we ccould find was `Yelp`'s. Unfortunately Yelp's API is highly sparse with regards to supermarket delivery.
* the ability to check EBT balances online (the government does not guarantee accuracy of online checking, but between purchase history and online estimates, we believe we could come to a reasonable guess).
* possibly turning into an app, to simplify the process of uploading receipts

Our full project is in the `SnapTracker` folder. The rest is scrap code from earlier iterations of the project. 


