import type { ReactNode } from "react";

/**
 * Full article bodies, keyed by slug. Metadata (title, date, type, etc.)
 * lives in data.ts; the render component reads metadata from there and the
 * body from here.
 *
 * Each body is plain JSX. The wrapper page applies .prose typography.
 */

export const articles: Record<string, ReactNode> = {
  "ship-0-to-1-in-two-weeks": (
    <>
      <p>
        When I tell people I ship 0→1 web products in one to two weeks, the reaction is usually
        some combination of disbelief and quiet skepticism. <em>That's just a landing page,
        right?</em> Or: <em>What about discovery? Testing? Stakeholder alignment?</em>
      </p>
      <p>
        Both reactions miss the point. Two-week ship cycles don't skip discovery — they compress
        it. They don't skip stakeholder work — they sequence it differently. And they don't
        replace good engineering with templates — they replace the parts of engineering that
        don't matter for V1.
      </p>
      <p>
        I've now used the same playbook for four products in four industries: a media platform
        (Dispatch), an author's bookstore (JFK Mensah Books), an NGO redesign (Eminence Lead),
        and a PropTech marketplace (Belleson Homes). All four are live. Here's what the
        playbook actually looks like.
      </p>

      <h2>The constraint paradox</h2>
      <p>
        The first thing to understand is why two weeks is enough. The honest answer: most
        products don't fail because they were under-built. They fail because they were
        over-built — too many features, too many opinions baked into the product before anyone
        has used it.
      </p>
      <p>
        When I have two weeks, I cannot build for hypothetical users. I can only build for the
        smallest demonstration of value. <strong>That constraint is the feature.</strong>
      </p>
      <p>
        In my four launches, the things I cut in V1 were always the things that turned out to
        matter least:
      </p>
      <ul>
        <li>For Dispatch, I cut comments, search, archives, social embed — none of which have been missed.</li>
        <li>For JFK Mensah Books, I cut user accounts, wishlists, recommendations — all V2.</li>
        <li>For Belleson Homes, I cut advanced filters, AI matching, agent dashboards.</li>
      </ul>
      <p>Each cut was painful at the time. None turned out to be wrong.</p>

      <h2>Day 1: the 24-hour discovery sprint</h2>
      <p>
        Before any code, I run a one-day discovery loop. The deliverable is a one-page brief:
        who, what, why now, what V1 looks like, what V2 looks like, and what we explicitly
        won't build. The loop has three components.
      </p>
      <p>
        <strong>Six founder questions.</strong> I ask the same six questions every time:
      </p>
      <ol>
        <li>Who is the user, in one sentence?</li>
        <li>What does success look like in 30 days?</li>
        <li>What's the smallest thing that would feel like progress?</li>
        <li>What's currently broken about the alternative they're using?</li>
        <li>Where will users come from for V1?</li>
        <li>What would make us scrap this and start over?</li>
      </ol>
      <p>
        <strong>Four reference products.</strong> I pick two best-in-class and two regional or
        cheaper alternatives. I audit how they handle the three or four interactions that
        matter for our domain.
      </p>
      <p>
        <strong>One priority cut.</strong> At the end of the day, I write a single sentence:
        &ldquo;V1 is done when [specific user action] happens for the first time.&rdquo; Everything
        that doesn't directly serve that sentence is V2.
      </p>
      <p>
        For Dispatch, the sentence was: <em>&ldquo;V1 is done when a reader arrives, finishes
        an article, and submits their email.&rdquo;</em> That's it. Categorization, tags, a
        homepage carousel — all cut or simplified.
      </p>

      <h2>Day 2: scope freeze and stack pick</h2>
      <p>
        Day two is about commitment. I freeze the scope (no new features after this point) and
        pick the stack.
      </p>
      <p>
        Stack choices are mostly mechanical at this point. I default to Next.js + Tailwind + a
        hosted database (Firebase or Supabase). For data flows that don't need a custom backend,
        I lean on Make.com or n8n. For payments, I integrate Paystack or Stripe directly.
      </p>
      <p>
        These picks aren't optimal in any abstract sense. They're optimal for two-week ship
        cycles. They cost very little setup time and have first-class community support when
        something breaks at 11pm on day eleven.
      </p>

      <h2>Days 3–12: build with the automation stack</h2>
      <p>
        This is where the stack earns its keep. The single biggest unlock for two-week ships
        isn't faster typing — it's not having to build the pieces that aren't core product.
      </p>
      <p>Examples from JFK Mensah Books:</p>
      <ul>
        <li>The post-purchase email confirmation, fulfilment trigger, and receipt? Three Make.com modules. Zero backend code.</li>
        <li>The CRM-style order log? A connected Google Sheet. Zero database design.</li>
        <li>The &ldquo;your order shipped&rdquo; trigger? Webhook from the payment provider, into Make.com, out to the customer.</li>
      </ul>
      <p>
        Built with custom code, each of these would have been a day's work — and that day's
        work would have eaten my V1 budget. The point isn't that Make.com is better than
        custom. It's that Make.com is good enough at the layer between user-facing product and
        backend ops, and that &ldquo;good enough&rdquo; buys me five days of focused product
        work I can spend elsewhere.
      </p>
      <p>
        I keep the custom code for the parts users actually see and feel: the storefront, the
        listing detail, the homepage. Those need to be polished.
      </p>

      <h2>Days 13–14: launch and observe</h2>
      <p>
        The last two days are deliberately quiet. I deploy on day twelve, spend day thirteen
        running through the user flows myself and with two real users, and ship publicly on
        day fourteen.
      </p>
      <p>
        I don't try to do post-launch work in this window. I just make sure the thing actually
        does what I promised, fix the three or four bugs that always show up, and then I get
        out of the way.
      </p>

      <h2>What this requires of you (as the PM)</h2>
      <p>The two-week playbook is not a stack. It's a temperament. You need to be willing to:</p>
      <p>
        <strong>Cut things you like.</strong> Every two-week ship has at least one feature I
        personally found cool that I had to cut. That's the job.
      </p>
      <p>
        <strong>Hold the line on scope.</strong> The single most common reason these sprints
        blow up is mid-sprint scope creep — usually requested in good faith. The PM's job is
        to defend the scope cut, not to say yes to every reasonable-sounding request.
      </p>
      <p>
        <strong>Be honest about V1 quality.</strong> A two-week V1 is not a finished product.
        It's a working product. There's a difference, and you have to be honest with the
        founder about which one they're getting.
      </p>
      <p>
        <strong>Trust the user, not your model of the user.</strong> The fastest way to
        overbuild V1 is to imagine the user complaining about a missing feature. The user
        usually doesn't complain. They use what works and leave.
      </p>

      <h2>Closing thought</h2>
      <p>
        Two-week ship cycles aren't magic. They're constraints that force the scope discipline
        most products lack. Most of the things you &ldquo;have to&rdquo; build for V1 turn out
        to be things you wanted to build, not things the user needed. The two-week constraint
        is what forces that distinction into the open.
      </p>
      <p>
        If you've never tried it, the easiest experiment is to take any product idea you've
        been sitting on for more than three months and ask: <em>what would be the smallest
        version of this I could ship in two weeks?</em> If you can answer that question
        honestly, you'll often find that the small version is more interesting than the
        version you were planning anyway.
      </p>
    </>
  ),

  "make-com-or-custom-backend": (
    <>
      <p>
        Make.com (and n8n, Zapier, and the rest) have changed what one person can ship.
        Workflows that used to require a backend developer, a queue, a webhook handler, and
        three days of work now take an afternoon and a few drag-and-drop modules.
      </p>
      <p>
        This is genuinely good news. It's also a trap.
      </p>
      <p>
        I've watched founders try to build their entire product on Make.com and end up with a
        Rube Goldberg machine that breaks every time a partner changes their API. I've also
        watched developers refuse to use Make.com on principle and burn three weeks building
        something a five-module flow would have handled.
      </p>
      <p>
        The right question isn't <em>which is better?</em> — it's <em>where's the line, and
        what signals tell you you've crossed it?</em> Here's the framework I use across client
        work.
      </p>

      <h2>What Make.com (and n8n) are great at</h2>
      <p>
        <strong>Connecting two systems that already speak HTTP.</strong> This is the sweet
        spot. Payment provider → email service → CRM → spreadsheet. Each connection used to be
        a backend project. Now it's three minutes.
      </p>
      <p>
        <strong>Side-channel ops.</strong> The post-purchase flow, the lead-routing flow, the
        weekly digest, the alerting on form submissions. Things that aren't core product but
        make the product feel finished.
      </p>
      <p>
        <strong>Stuff with low cost of failure.</strong> If a Make.com module fails to run for
        an hour, the user usually doesn't notice. If your auth backend fails for an hour, the
        user definitely notices. Use Make for things in the first category. Don't use it for
        things in the second.
      </p>
      <p>
        <strong>Iterating on business logic faster than engineering can ship.</strong> If you
        change your fulfilment rule three times in a week, doing it in Make is genuinely
        faster than asking engineering to redeploy.
      </p>

      <h2>What Make.com isn't great at</h2>
      <p>
        <strong>Things on the critical user path.</strong> If a user clicks a button and the
        next thing that happens depends on Make.com running successfully <em>right now</em>,
        you've built a brittle system. Critical-path interactions belong in code you control.
      </p>
      <p>
        <strong>High-throughput operations.</strong> Make.com pricing assumes hundreds of
        operations a day. Once you're at thousands per hour, the pricing model and the
        latency model both break down.
      </p>
      <p>
        <strong>Anything stateful or transactional.</strong> If you need to update three
        records together or roll back a partial change, you need a real database with a real
        transaction. Make.com's branching features pretend this is solved. It isn't.
      </p>
      <p>
        <strong>Anything you'll need to debug under pressure.</strong> When a Make.com flow
        breaks at 2am because a third-party API changed its response format, you're debugging
        in a visual interface that wasn't designed for that. Custom code with logs and tests
        is far easier to fix in a hurry.
      </p>

      <h2>The decision rubric</h2>
      <p>For each piece of work, I ask five questions:</p>
      <ol>
        <li><strong>Is it on the critical user path?</strong> If yes — custom code. If no — Make.com is on the table.</li>
        <li><strong>Could it fail silently for an hour without major impact?</strong> If yes — Make. If no — custom.</li>
        <li><strong>Will the volume stay under ~1,000 ops/day?</strong> If yes — Make. If no — at minimum, plan a migration path.</li>
        <li><strong>Does it need to be transactional?</strong> If yes — custom. Make.com cannot truly do this.</li>
        <li><strong>Will the rules change frequently in early days?</strong> If yes — Make.com lets you iterate without redeploys. Use this to your advantage.</li>
      </ol>
      <p>
        If three or more answers point to custom, build custom. If three or more point to
        Make, build there and revisit in three months.
      </p>

      <h2>A worked example: JFK Mensah Books vs Belleson Homes</h2>
      <p>
        Both projects faced the same question: where does the post-purchase / post-lead
        workflow live?
      </p>
      <p>
        For <strong>JFK Mensah Books</strong>, the answer was Make.com. Volume is low (a
        self-published author selling books), the post-purchase flow is not on the critical
        user path (the user has already paid), failure cost is low (a delayed receipt isn't a
        catastrophe), and the rules around fulfilment changed twice in the first month.
        Make.com was correct.
      </p>
      <p>
        For <strong>Belleson Homes</strong>, the answer was custom code. Lead routing to
        agents <em>is</em> on the critical path — if a lead doesn't reach the right agent in
        real time, the buyer goes to a competitor. Volume scales with marketing spend, which
        can spike. Failure cost is high — a missed lead is real money. Make.com was wrong
        here, and we did the lead-routing logic in code from day one.
      </p>

      <h2>Migration signals</h2>
      <p>
        If you're already on Make.com and wondering whether it's time to move, here are the
        signals I watch for:
      </p>
      <ul>
        <li><strong>Cost is rising faster than your usage.</strong> You've moved into a tier where the per-operation cost no longer makes sense.</li>
        <li><strong>Debugging takes more than 30 minutes when something breaks.</strong> A clean code path is debuggable. A 14-module Make.com flow is not.</li>
        <li><strong>You're building branching logic to handle edge cases.</strong> Make.com branching is a smell. If you have three nested branches, you're better off in code.</li>
        <li><strong>Your team has a developer, and the developer is faster than the Make.com flow.</strong> The simplest signal: at some point, custom is cheaper.</li>
      </ul>

      <h2>Closing thought</h2>
      <p>
        Make.com is a productivity multiplier when used correctly and a liability when used as
        a substitute for an actual backend. The framework above is opinionated, but the core
        idea is simple: <strong>critical path = custom, side channel = Make</strong>. Get
        that right and you'll spend your engineering budget on the parts of the product that
        matter, not on rebuilding the parts that workflow tools already handle well.
      </p>
    </>
  ),

  "proptech-emerging-markets": (
    <>
      <p>
        I've now built two property-related products: one that worked, and a previous attempt
        that didn't. The difference between them was almost entirely about understanding which
        Western PropTech features translate to a Ghanaian market and which ones are imported
        noise.
      </p>
      <p>
        Most regional PropTech I've seen fails the translation test. Founders pattern-match to
        Zillow or Rightmove, ship those features, and wonder why nobody uses them. The
        pattern-matching feels rigorous — it's not. Western PropTech solves Western buyer
        problems. Those aren't the same problems.
      </p>
      <p>Here's what I learned cutting through the noise to ship Belleson Homes.</p>

      <h2>What Western PropTech actually does</h2>
      <p>
        Zillow's product is built around a specific buyer behaviour: a buyer browses casually
        for months, narrows by neighbourhood, school district, and home type, then engages an
        agent only when they're serious. The product is optimised for that long-tail browsing
        window. Zestimate, advanced filters, neighbourhood data, school overlays — all of
        these matter because they reduce the cost of long-tail browsing.
      </p>
      <p>
        Rightmove is similar. So is Realtor.com. The mental model is: the buyer is
        research-driven, has specific filterable criteria, and only contacts agents at the end
        of the funnel.
      </p>
      <p>This model assumes:</p>
      <ul>
        <li>The buyer trusts public data sources (school ratings, crime stats, neighbourhood scores).</li>
        <li>Listings are reliably accurate and updated by professionals.</li>
        <li>Photography is competent enough to make remote browsing useful.</li>
        <li>Agents are abundant and easy to engage.</li>
      </ul>
      <p>In Ghana, none of those assumptions hold cleanly.</p>

      <h2>What buyers in Accra actually do</h2>
      <p>
        I spoke to seven prospective buyers and three agents before scoping Belleson. The
        behaviour pattern was consistent enough that it felt like one user.
      </p>
      <p>
        <strong>Buyers don't browse casually for months.</strong> They browse intensely for
        two to four weeks, often in response to a life event — a new job, a marriage, a
        family expansion. The window is narrower and the urgency is higher.
      </p>
      <p>
        <strong>Filters matter much less than they do in the West.</strong> The Ghanaian buyer
        doesn't usually have a list of must-have features. They have a budget, a region (often
        quite broad — &ldquo;East Legon, Cantonments, or Airport Hills&rdquo;), and an
        emotional response to what they see. Filtering by &ldquo;3 bedrooms, gym, pool&rdquo;
        is a Western framing that doesn't match how local buyers actually decide.
      </p>
      <p>
        <strong>Photography is the dominant trust signal.</strong> A listing with three
        professional photos converts at multiples of a listing with eight phone photos.
        Buyers said this explicitly: <em>&ldquo;If the photos look bad, I assume the property
        is bad.&rdquo;</em>
      </p>
      <p>
        <strong>Agent response time is the other dominant signal.</strong> Buyers expected
        response within hours, not days. A delayed response was read as &ldquo;the property is
        no longer available&rdquo; or &ldquo;the agent isn't serious.&rdquo;
      </p>

      <h2>What this changed about V1</h2>
      <p>For Belleson, I cut the entire stack of Western-style features. Specifically:</p>
      <ul>
        <li><strong>No advanced filters</strong> beyond region and price band. Filters were noise.</li>
        <li><strong>No neighbourhood scoring or data overlays.</strong> Buyers didn't want this. They had their own opinions.</li>
        <li><strong>No saved searches or alerts.</strong> The browsing window is too short for these to pay back the complexity.</li>
        <li><strong>No agent dashboards in V1.</strong> Agents wanted a fast inbox, not a CRM.</li>
      </ul>
      <p>What I kept and invested in:</p>
      <ul>
        <li><strong>Photography quality control.</strong> Listings with bad photos got flagged and re-shot. This was the highest-leverage manual work we did.</li>
        <li><strong>Price clarity.</strong> Cedis upfront, no hidden fees, no &ldquo;POA&rdquo; or &ldquo;contact agent for price.&rdquo; Hidden prices killed conversion.</li>
        <li><strong>Real-time agent contact.</strong> Tap to call, tap to WhatsApp, tap to email. The agent gets the lead in ten seconds, not ten minutes.</li>
        <li><strong>Mobile-first interaction.</strong> Most browsing was on phones. The desktop experience was secondary.</li>
      </ul>

      <h2>Three rules I now follow</h2>
      <p>
        After Belleson and the failed earlier attempt, I have three rules I'd give anyone
        building PropTech in an emerging market.
      </p>
      <p>
        <strong>Rule 1: Photography is the product.</strong> This sounds reductive. It isn't.
        The number-one driver of conversion is whether the photos make the buyer feel
        something. Spend more on photography than on the platform. Most regional portals get
        this exactly backwards.
      </p>
      <p>
        <strong>Rule 2: Price clarity beats price filtering.</strong> A clear, upfront price
        in local currency converts better than a filterable range with hidden fees. Western
        portals can hide pricing because trust is high. Emerging-market portals can't.
      </p>
      <p>
        <strong>Rule 3: Agent response time is a product feature, not an agent problem.</strong>{" "}
        If your platform doesn't make it stupidly easy for the agent to respond fast, your
        platform will lose to WhatsApp. Treat agent response time as a metric you own, not as
        something the agent has to manage.
      </p>

      <h2>What generalises</h2>
      <p>
        The lesson here isn't specific to PropTech, and it isn't specific to Ghana. It's that
        copying a successful Western product into an emerging market without questioning the
        underlying assumptions is a fast way to ship something nobody uses.
      </p>
      <p>
        The right move is the unglamorous one: talk to seven users, watch them try to do the
        thing, notice what they actually need, and let that override the template. You'll cut
        more features than you build. The result will be more honest and convert better than
        the imported playbook would have.
      </p>
      <p>
        I see a lot of regional PropTech, fintech, and e-commerce trying to ship the Western
        product on Western timelines. The ones that work are the ones willing to start over
        from the user's actual behaviour, not from the template.
      </p>
    </>
  ),

  "discovery-one-week-sprints": (
    <>
      <p>
        Traditional product discovery — the kind that fills a Reforge module — assumes you
        have weeks. User interviews, journey mapping, competitive teardowns, JTBD synthesis,
        prioritisation workshops. Each step is valuable. Each step also takes days.
      </p>
      <p>
        When you have seven days from brief to live, you don't have days. You have hours. So
        the discovery process has to compress without losing the parts that actually matter.
      </p>
      <p>
        Here's the compressed version. It fits on one page, takes under three hours total,
        and has been the discovery layer of every two-week ship I've done.
      </p>

      <h2>The compressed loop (3 hours total)</h2>
      <p>The whole thing breaks into three pieces:</p>
      <ol>
        <li><strong>The founder conversation</strong> (90 minutes)</li>
        <li><strong>The reference audit</strong> (60 minutes)</li>
        <li><strong>The priority cut</strong> (30 minutes)</li>
      </ol>
      <p>
        That's it. No interviews with users. No competitive matrix. No JTBD framework. Those
        tools are right for longer projects. They will kill a one-week project.
      </p>

      <h2>Piece 1: The founder conversation (90 min)</h2>
      <p>
        The founder already knows most of what we need. The job isn't to interview hundreds
        of users — it's to extract the founder's own conviction and pressure-test it.
      </p>
      <p>Six questions, in order:</p>
      <p>
        <strong>1. Who is the user, in one sentence?</strong>
        <br />
        If the founder needs more than one sentence, the project isn't ready. Push back until
        the sentence exists.
      </p>
      <p>
        <strong>2. What does success look like in 30 days?</strong>
        <br />
        Not in the long term. In 30 days. This is what we're scoping V1 against. Anything
        past 30 days is V2.
      </p>
      <p>
        <strong>3. What's the smallest thing that would feel like progress?</strong>
        <br />
        This is the V1 cut. If they can't name it, name it together. If you can't agree, the
        project doesn't have a clear V1 yet.
      </p>
      <p>
        <strong>4. What's currently broken about the alternative?</strong>
        <br />
        What are users doing today instead? Why is it bad? This tells you the conversion lever.
      </p>
      <p>
        <strong>5. Where will V1 users come from?</strong>
        <br />
        If the answer is vague — &ldquo;we'll do marketing&rdquo; — you have a discovery
        problem before you have a build problem. Pin down the first 50 users specifically.
      </p>
      <p>
        <strong>6. What would make us scrap this and start over?</strong>
        <br />
        This surfaces hidden constraints and unspoken assumptions. The answer is often more
        useful than the answer to question one.
      </p>

      <h2>Piece 2: The reference audit (60 min)</h2>
      <p>
        I pick four reference products — two best-in-class, two regional or cheaper
        alternatives. I spend fifteen minutes on each, looking at exactly three things:
      </p>
      <ol>
        <li>What's their first-page hierarchy? What does the user see first?</li>
        <li>What's their primary user action? (subscribe, buy, contact, etc.)</li>
        <li>What did they cut from V1 that they probably wanted to include?</li>
      </ol>
      <p>
        The goal isn't to copy. The goal is pattern-recognition. After four references, the
        right shape of V1 usually becomes obvious.
      </p>
      <p>
        For Dispatch, the four references were Substack, Ghost, a regional indie publication,
        and a Substack alternative I knew had launched lean. The shape that emerged:
        content-first homepage, fast article pages, subscribe capture above fold. Nothing else
        mattered for week one.
      </p>

      <h2>Piece 3: The priority cut (30 min)</h2>
      <p>This is the hardest part. With everything I've learned, I write one sentence:</p>
      <blockquote>
        V1 is done when <strong>[specific user action]</strong> happens for the first time.
      </blockquote>
      <p>
        That sentence is the spec. Anything that doesn't directly serve that sentence is V2.
      </p>
      <p>Examples from real projects:</p>
      <ul>
        <li><strong>Dispatch:</strong> &ldquo;V1 is done when a reader arrives, finishes an article, and submits their email.&rdquo;</li>
        <li><strong>JFK Mensah Books:</strong> &ldquo;V1 is done when a buyer places and pays for an order, and the author is notified.&rdquo;</li>
        <li><strong>Eminence Lead:</strong> &ldquo;V1 is done when a visitor finds the program they're looking for and contacts the org.&rdquo;</li>
        <li><strong>Belleson Homes:</strong> &ldquo;V1 is done when a buyer views a listing and contacts an agent.&rdquo;</li>
      </ul>
      <p>
        Each sentence is concrete. Each sentence implies a list of things to build and, more
        importantly, a list of things <em>not</em> to build. User accounts? Not required.
        Search? Maybe not required. Comments? Probably not required.
      </p>

      <h2>The deliverable: a one-page brief</h2>
      <p>After three hours, the deliverable is a one-page document with:</p>
      <ul>
        <li><strong>Who:</strong> the user, in one sentence</li>
        <li><strong>30-day success:</strong> the metric we're tracking</li>
        <li><strong>The V1 sentence:</strong> the one above</li>
        <li><strong>In V1:</strong> 3–5 bullet points</li>
        <li><strong>Not in V1:</strong> 3–5 bullet points (the explicit cuts)</li>
        <li><strong>First 50 users:</strong> how they'll arrive</li>
        <li><strong>Risks:</strong> what could break this</li>
      </ul>
      <p>
        This document is the contract between PM and founder. We sign it (figuratively) and
        we don't change it for the duration of the sprint.
      </p>

      <h2>When this isn't enough</h2>
      <p>
        The compressed loop works for products in the first wave — early-stage, solo-founder
        or small-team, content / e-commerce / informational / marketplace launch. It does
        <em> not</em> work for:
      </p>
      <ul>
        <li>Products with regulatory constraints (fintech, health) — those need real compliance discovery.</li>
        <li>Products entering a saturated category — you need real competitive analysis.</li>
        <li>Products with complex multi-sided dynamics — you need real user research.</li>
      </ul>
      <p>
        If your project has any of those characteristics, slow down. The compressed loop will
        give you a confident answer that's wrong, which is worse than admitting the project
        needs more time.
      </p>

      <h2>Closing thought</h2>
      <p>
        The compressed discovery loop is not a substitute for real discovery. It's the right
        tool for projects whose answer is mostly known and whose constraint is shipping. The
        faster you can get from &ldquo;we have an idea&rdquo; to &ldquo;we have a one-page
        brief signed by the founder,&rdquo; the more time you keep for the part that actually
        matters: building a thing users can use.
      </p>
      <p>
        The whole loop fits on a one-page checklist. If you find yourself in a one-week
        sprint, that one page is the most leveraged document you'll write.
      </p>
    </>
  ),
};
