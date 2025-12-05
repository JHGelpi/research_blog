# My thoughts on building a flexible and scalable data architecture
## Background
I have spent the vast majority of my professional life working with data.  At the beginning of my career I was working in Excel, Access Databases, flat files, etc.  As technologies grew and expanded so did my use of them.  I have been in the "trenches" of data engineering spending hours cleaning dirty data sets.  I have also been presented with the challenge of needing to migrate to new technologies.  Maybe a new leader decided we needed to adopt a new data base technology, or maybe one of my colleagues needed a view of my dataset...but didn't have permissions or access.  I have worked with Data Scientists that were brilliant at their job...but did not know how to write proper SQL <rant>I think the industry is waking up to this, but it has not always been true.  Data Scientists were, and sometimes are, unfairly expected to be data engineers.  People could not understand, and sometimes still don't, why Data Scientists didn't just know SQL.  I feel like this is the same thing as expecting someone who spent their entire career developing in C++ to be an expert in Python with little to no training...Or expecting someone who speaks english to be able to easily understand Spanish.  The techniques, languages, and approach to data is vastly different between Data Scientists and Data Engineers.</rant>

The point is this: You can have the best possible plan for your data, but as we all know...plans are invalid immediately after implementing them.

## Architecting for your (failed) plan
When I worked at Red Hat we had a problem: Distributed data analytics teams with domain expertise with common data needs...I'm sure "nobody" has heard this problem before...The model worked well because you had domain experts (Sales, HR, etc.) with the valuable business context working on dashboards, reports, analytics, etc.  However, the challenge was the need to scale our centralized data engineering team.  We needed to give the federated teams access to the data they needed while also maintaining a one-to-many relationship between data engineers and analysts.

Enter what we called "Data Virtualization" or maybe more commonly known today as the "Semantic" layer.  There are a few technologies that offer this functionality in some form or another.  We chose to implement a technology similar to Trino[1].  The value of implementing a semantic, or virtualization, layer in your data stack is this:

Teams can build custom views that suit their needs without relocating data sets.  RBAC can be applied at a "pinch point" that gives IT the much needed ability to monitor and secure data sets.  We can apply things like row and column level security at this layer as well.  Additionally data teams can optimize data sets without disrupting end consumers.

Consider this example: You built a data set expecting tens of thousands of rows and stored it in a high-performance database like AWS Redshift. Usage patterns were frequent with minimal latency requirements. Over time, the table grew to millions of rows. Older data became less critical, but occasional access was still needed.

With a semantic layer, you can archive that older data to an object store like S3 or ADLS, dramatically reducing storage costs. The best part? Your consumers are none the wiser. Without a semantic layer, imagine the headache—getting consumers to point to a new location, performing the necessary work to join data together, managing the migration. The semantic layer handles all of this transparently.

Imagine another scenario where you have one table that has all of the data needed.  This table is tuned and optimized.  You have optimized partitioning and update patterns.  Now you have a second team that comes along and needs access to all of the data....except for three columns.  You should not have to replicate the table minus those three columns.  Instead the semantic layer provides you with the ability to create another view, or better yet...RBAC can facilitate access to only data your new team needs and they can self-serve.  Building their own data view that meets their needs.

There are other benefits to this architecture as well, but I will not belabour the point here.

## The architecture
So how does this all work?  The solution looks something like this:
- Your Semantic layer (Let's assume it's Trino) points to your data lake (S3?), your Analytical Database (Redshift, Snowflake), or your application database
- If you have streaming data you save that data within your data lake (Lambda architecture) while exposing your live kafka topics in Trino
- Now you have the ability to present a common view of your data for consumers while you secure, optimize, move (or not) your data as your skilled data engineers see fit

One of the best parts?  The semantic layer optimizes SQL statements - eliminating the need for specialization in SQL.

## In Summary
The concept of a semantic layer is nothing new, but the implementation of this architecture is not nearly as prevalent as it should be. If you're architecting a data platform or facing challenges with distributed teams, data silos, or the constant need to migrate and optimize data storage, I strongly encourage you to evaluate semantic layer technologies. The upfront investment in implementing a virtualization layer will pay dividends as your data needs evolve, your team scales, and your business requirements change. Your future self—and your data consumers—will thank you for building in this flexibility from the start.

---

[1] [Trino](https://trino.io/) - A distributed SQL query engine designed to query large data sets across multiple data sources.