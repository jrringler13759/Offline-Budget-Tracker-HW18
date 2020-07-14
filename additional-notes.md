I told you during the homework introduction that the application's online and offline behavior should be indistinguishable. After further study of the solution, this turned out to be infeasible. So the actual user story is a bit weaker:

> The user loads the page (while online) and starts adding transactions. They may go offline one or more times during this process. If a transaction is added while offline, the table and chart still update. As soon as the connection is back online, any pending transactions are posted to the server (and will be visible the next time the page is loaded).

There are no requirements for what happens to any remaining pending transactions if the page is closed while still offline.

The solution includes a service worker to cache files and API requests, as well as a `manifest.json` for PWA capability, but these don't contribute to the required functionality (presumably they were included to confuse me). So it turns out that, in fact, you don't even need service workers for this assignment, only IndexedDB. If you examine 26-Stu-Mini-Project from unit 17, you should find it readily adaptable.