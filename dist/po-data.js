/* Original editorial practice. These are not official exam questions or timings. */
const PO_TOPICS = [
  {id:'banking', label:'Banking & Finance'},
  {id:'economy', label:'Economy & Business'},
  {id:'society', label:'Society & Technology'}
];
const PO_LEVELS = [
  ['Finding facts',5],['Following an argument',5],['Words in context',6],
  ['Cause and effect',6],['Making inferences',7],['Tone and purpose',7],
  ['Testing assumptions',8],['Weighing evidence',8],
  ['Connecting ideas',9],['Critical evaluation',10]
].map(([skill,minutes],i)=>({level:i+1,skill,minutes}));
const PO_SETS = {
 banking: [
  {title:'A branch changes its hours', paragraphs:[
   'A neighbourhood bank found that many market traders could not visit during its morning service hours. The branch introduced a late-afternoon counter twice a week. The counter accepted deposits and helped customers update their contact details, but loan applications still required a separate appointment.',
   'After a month, the manager asked visitors whether the new hours were useful. Most respondents welcomed the change, although some requested a weekend service. The branch kept the afternoon counter and began recording waiting times before deciding whether to extend the arrangement.'
  ], questions:[
   ['Why did the bank introduce a late-afternoon counter?','Market traders had difficulty visiting during the morning service hours.'],
   ['Which service still required a separate appointment?','Loan applications still required a separate appointment.'],
   ['What did the branch record before considering a further extension?','It recorded customer waiting times.']
  ]},
  {title:'From complaint to correction', paragraphs:[
   'Customers at a bank repeatedly complained that transfer receipts did not clearly distinguish a pending payment from a completed one. Some customers made a second transfer because they assumed the first had failed. The bank initially responded by adding a longer explanation to its help page.',
   'Complaints continued, so the service team observed customers using the payment screen. It then placed a clear status message beside each transaction and added a reference number for support enquiries. The team proposed comparing duplicate-transfer complaints before and after the change. It did not claim that clearer messages would prevent every payment problem.'
  ], questions:[
   ['What was the bank’s first response to the complaints?','It added a longer explanation to the help page.'],
   ['How did observation change the bank’s approach?','It shifted the response from a separate help page to clearer status messages and support references on the transaction screen.'],
   ['Why would comparing duplicate-transfer complaints help assess the change?','Duplicate transfers were one reported consequence of unclear status messages, so a comparison could indicate whether that particular problem became less common.']
  ]},
  {title:'A buffer for uncertain months', paragraphs:[
   'A cooperative encouraged members with irregular earnings to build a small savings buffer. Its adviser explained that the buffer was a reserve for unexpected expenses, not a promise that all future difficulties could be avoided. Members could begin with modest deposits rather than wait until they had a large sum.',
   'The adviser was cautious about setting the same target for everyone. A fixed target might be manageable for one household but onerous for another. She therefore asked members to review their essential expenses and choose an amount they could sustain. In this account, the emphasis was on a practicable habit, not an impressive opening balance.'
  ], questions:[
   ['What does “buffer” mean in this passage?','A reserve of savings that can help absorb unexpected expenses.'],
   ['What does “onerous” suggest about a target for some households?','It may be burdensome or difficult to meet.'],
   ['Explain “practicable” in the final sentence.','Realistic and possible to maintain in the member’s circumstances.']
  ]},
  {title:'When a faster form creates delays', paragraphs:[
   'A bank shortened its loan enquiry form to reduce the time customers spent completing it. However, the new form omitted a field explaining the purpose of the loan. Staff then had to contact many applicants to obtain this information before arranging an appropriate appointment.',
   'The shorter form improved the time needed for the initial submission, but the number of follow-up calls rose. A review team argued that measuring only form-completion time concealed work transferred to a later stage. It recommended assessing the whole enquiry process. This did not mean that every removed field was useful; some had never influenced the next step.'
  ], questions:[
   ['What caused the increase in follow-up calls?','Staff needed to collect loan-purpose information that the shortened form no longer requested.'],
   ['Why could the initial time measurement give a misleading impression?','It captured faster submission but excluded the extra work and delays later in the enquiry process.'],
   ['Does the passage support restoring every removed field? Explain.','No. Some removed fields were not useful. The argument supports retaining information needed for the process, not restoring all fields indiscriminately.']
  ]},
  {title:'An account without activity', paragraphs:[
   'A district celebrated a large increase in newly opened bank accounts. A later survey found that some account holders still relied on a local cash collector for routine transactions. They knew that their accounts existed but were uncertain how to resolve a failed digital payment. Others could not reach the nearest service point during working hours.',
   'The survey did not find that all inactive accounts had the same cause. Its authors proposed asking users about practical barriers before judging the programme. They suggested that account ownership and useful access were related but distinct outcomes. A high opening total alone could not establish whether financial choices had expanded.'
  ], questions:[
   ['What can be inferred about the district’s original success measure?','It measured account creation more directly than practical use or improved financial choices.'],
   ['Why would a single solution for all inactive accounts be questionable?','The survey identified different barriers, including uncertainty about failed payments and inconvenient service hours.'],
   ['Would fewer inactive accounts prove that every user’s needs were met? Explain.','No. Activity alone does not establish safe, convenient or useful access for every user; the passage calls for examining practical barriers and outcomes.']
  ]},
  {title:'The promise of a paperless branch', paragraphs:[
   'Promotional accounts of paperless banking often describe it as an inevitable improvement. Digital records can be easier to retrieve, and customers may avoid carrying repeated copies of documents. Yet a branch that removes paper without providing usable alternatives may simply move the difficulty from the filing cabinet to the customer’s phone.',
   'The sensible question is not whether paper should survive forever. It is whether each change makes a necessary task easier to complete and easier to correct when something goes wrong. Staff assistance and accessible formats are not evidence of technological failure. They are part of designing a service for the people expected to use it.'
  ], questions:[
   ['How would you describe the author’s tone towards paperless banking?','Measured and cautiously supportive: the author recognises benefits while questioning claims of automatic improvement.'],
   ['What is the purpose of the filing-cabinet-to-phone comparison?','It illustrates how a reform can transfer difficulty to customers instead of removing it.'],
   ['Why does the author defend staff assistance?','To argue that support is part of effective service design, rather than a sign that digital banking has failed.']
  ]},
  {title:'The case for fewer reminders', paragraphs:[
   'A bank proposed reducing the number of repayment reminders sent to customers. Its team argued that frequent messages were being ignored and that one clearly written reminder would receive more attention. The proposal assumed that message frequency, rather than inaccurate contact details or confusing due dates, was a major reason for poor response.',
   'A pilot could compare similar customer groups receiving different reminder schedules while keeping message wording and payment options consistent. Even then, a higher response rate would not establish that the schedule suited every customer. Some customers might need an earlier notice to organise funds. The relevant aim was timely, informed action, not merely fewer messages.'
  ], questions:[
   ['Identify the key assumption behind the proposal.','It assumes that excessive frequency is an important reason customers ignore reminders, so reducing frequency could increase attention.'],
   ['Which alternative explanation in the passage would weaken that assumption?','Inaccurate contact details or confusing due dates could explain poor responses independently of message frequency.'],
   ['Why keep wording and payment options consistent during the pilot?','To reduce competing explanations for any difference and better isolate the effect of the reminder schedule.']
  ]},
  {title:'What a pilot can establish', paragraphs:[
   'A bank tested a new help desk at one branch. Complaints fell during the pilot, and the project team attributed the fall to better assistance. However, the branch also served fewer customers because a nearby market was temporarily closed. Counting complaints without considering transaction volume could therefore exaggerate the apparent improvement.',
   'A stronger evaluation would examine complaints relative to comparable activity, the types of problems reported and whether unresolved problems were recorded consistently. Interviews might reveal that customers found the help desk useful, but favourable interviews would answer a different question from whether the desk reduced errors. Evidence about satisfaction and evidence about operational performance can complement each other without being interchangeable.'
  ], questions:[
   ['What competing explanation limits the team’s conclusion?','Lower customer activity during the market closure could have reduced complaint counts even without the new help desk.'],
   ['What additional comparison would strengthen the evaluation?','Compare complaints relative to similar transaction or customer volumes, with consistent reporting and attention to problem types.'],
   ['Why are favourable interviews insufficient to prove fewer errors?','They support a claim about customer experience, but satisfaction does not directly establish a reduction in operational errors.']
  ]},
  {title:'Access, trust and redress', paragraphs:[
   'A financial service can be available without being trusted. A customer may know how to make a transfer but hesitate because resolving an error appears costly or uncertain. In that situation, a simple payment screen addresses only the beginning of the transaction. Confidence also depends on what happens after a problem.',
   'Institutions sometimes treat complaint resolution as a separate administrative obligation. Yet an accessible redress process can influence whether customers use a service at all. This creates a connection between operational support and inclusion: support is not merely a response to existing use but may help make use possible.',
   'The connection should not be overstated. A good complaint process cannot compensate for persistent failures, and low complaint counts may reflect difficulty reporting problems. An evaluation must therefore consider reliability, reporting access and resolution together.'
  ], questions:[
   ['How does the passage connect complaint resolution with inclusion?','Accessible redress can increase confidence and willingness to use a service, making support part of meaningful access.'],
   ['Why might low complaint counts coexist with poor service?','Customers may find it difficult to report problems, so low counts can reflect reporting barriers rather than reliability.'],
   ['Summarise the three dimensions the author says should be evaluated together.','Whether the service works reliably, whether customers can report problems, and whether those problems are resolved effectively.']
  ]},
  {title:'A target that changes behaviour', paragraphs:[
   'A bank rewarded branches for resolving customer complaints quickly. Average recorded resolution time fell, and managers described the result as a clear improvement. A review later found that some cases were marked closed when an explanation had been sent, even if the customer’s underlying problem remained. The target had influenced what staff treated as completion.',
   'One response was to replace the time target with customer confirmation. That would add a useful perspective, but customers might not reply, or might confirm satisfaction before a delayed fault reappeared. A single replacement indicator could create a different blind spot. Abandoning measurement altogether would also make persistent delays harder to identify.',
   'The better conclusion is modest: indicators should be interpreted alongside case reviews and consistent definitions. Speed matters, but it is valuable because it helps customers obtain a remedy. When the indicator becomes detached from that purpose, improvement in the number may not represent improvement in the service.'
  ], questions:[
   ['Evaluate the claim that falling recorded resolution time proves service improvement.','It is insufficient: some cases were closed before the underlying problem was resolved, so the metric could improve without an effective remedy.'],
   ['Why is customer confirmation useful but not a complete solution?','It adds the customer’s perspective, but non-response and faults that reappear can still make it an imperfect indicator.'],
   ['Propose an evaluation consistent with the author’s reasoning and explain it.','Use consistent closure definitions, time data, customer feedback and case reviews together. This checks both speed and whether customers actually received a remedy.']
  ]}
 ],
 economy: [
  {title:'A shared delivery route', paragraphs:[
   'Three small shops in a town arranged a shared delivery route for nearby customers. Previously, each shop hired a vehicle separately, even when several orders went to the same street. The shared route operated on Tuesday and Friday afternoons. Customers who needed another delivery time could still arrange an individual service.',
   'The shopkeepers kept a record of delivery costs and missed orders. After four weeks, they planned to discuss whether the shared arrangement should continue. They did not change the prices of the goods during the trial, because they wanted first to understand how the delivery service worked.'
  ], questions:[
   ['On which days did the shared route operate?','Tuesday and Friday afternoons.'],
   ['What could customers do if the shared schedule did not suit them?','They could arrange an individual delivery service.'],
   ['What two things did the shopkeepers record?','Delivery costs and missed orders.']
  ]},
  {title:'The factory’s second attempt', paragraphs:[
   'A furniture workshop tried to increase output by asking workers to complete each assembly step more quickly. The number of unfinished chairs rose because the painting area could not handle the extra work. The manager then mapped the movement of a chair through the workshop rather than examining each step in isolation.',
   'The next trial adjusted the assembly schedule to match painting capacity and reduced the number of batches waiting between stages. The manager judged the trial by completed, saleable chairs rather than partially assembled units. The change in measurement followed a change in understanding: a fast stage did not necessarily make the whole process faster.'
  ], questions:[
   ['What happened after assembly was accelerated?','Unfinished chairs accumulated because painting could not handle the increased flow.'],
   ['How did the second trial differ from the first?','It coordinated assembly with painting capacity rather than merely speeding up individual assembly steps.'],
   ['Why did the manager change the output measure?','Completed, saleable chairs reflected the result of the entire process more accurately than partially assembled units.']
  ]},
  {title:'A fragile recovery', paragraphs:[
   'A local business survey described a recovery as fragile. Orders had increased, but firms were reluctant to hire permanent staff because customers were still postponing large purchases. Several owners said that improved sales provided relief without removing uncertainty.',
   'The survey’s author warned against treating a short improvement as a durable trend. She did not dismiss the better figures; instead, she called them tentative evidence. In her view, a resilient business environment would allow firms to withstand a setback without immediately abandoning investment. The vocabulary reflected caution about the strength of the recovery, not a claim that no recovery existed.'
  ], questions:[
   ['What does “fragile” mean when describing the recovery?','Vulnerable to setbacks or not yet secure.'],
   ['How does “tentative” qualify the evidence?','It indicates that the evidence is provisional and does not yet justify a firm conclusion.'],
   ['What does “resilient” mean in this context?','Able to withstand or recover from setbacks without immediately giving up investment.']
  ]},
  {title:'Stock on the wrong shelf', paragraphs:[
   'A grocery wholesaler offered retailers a discount for placing larger orders. Some retailers bought more slow-selling items to reach the discount threshold. Their purchase cost per unit fell, but more cash remained tied up in goods that occupied shelf space for weeks.',
   'When fast-selling items ran out, a few shops delayed replenishment because available cash was limited. The discount had reduced one visible cost while contributing to another problem. The passage does not imply that bulk purchasing is always unwise. Its value depends partly on how quickly stock sells and what other purchases the buyer gives up to obtain the discount.'
  ], questions:[
   ['Why did some shops have less cash available despite lower unit costs?','They had committed more money to large orders of slow-selling goods.'],
   ['How could the discount contribute to shortages of popular goods?','Cash tied up in slow stock left less available to replenish fast-selling items.'],
   ['What determines whether a bulk discount is useful in the passage?','Sales speed and the alternative uses of the money matter, alongside the lower unit price.']
  ]},
  {title:'The empty training room', paragraphs:[
   'A council offered free evening training for small-business owners. Registrations were high, but attendance was low. Organisers initially interpreted the empty seats as a lack of interest. Follow-up conversations found that some registered owners worked alone and could not close their shops during the sessions. Others lacked affordable transport home after the course.',
   'The organisers considered shorter sessions at different times and written summaries for those unable to attend. Registration did not prove that the original format was workable, but low attendance did not prove that the subject lacked value. Interest and the ability to participate were different constraints.'
  ], questions:[
   ['What inference about low attendance is supported by the follow-up conversations?','Practical barriers could explain at least some absences, so a lack of interest was not the only plausible explanation.'],
   ['Why might changing the course content alone fail to improve participation?','It would not address shop-opening constraints or transport difficulties.'],
   ['What does high registration establish, and what does it fail to establish?','It suggests expressed interest, but does not show that people can attend the offered schedule and format.']
  ]},
  {title:'Beyond the cheapest bid', paragraphs:[
   'Choosing the cheapest supplier can look like an uncomplicated saving. The invoice is easy to compare, and the decision is easy to defend. But a delayed component can stop production, while a poorly made one may require repair. The quoted price is only one part of the cost of obtaining a usable input.',
   'This is not an invitation to accept expensive bids without scrutiny. Reliability claims should be tested, and higher prices do not automatically indicate better quality. The point is narrower: purchasing decisions should compare relevant costs over the task as a whole. A saving exists when the organisation uses fewer resources to achieve the required result, not simply when one invoice becomes smaller.'
  ], questions:[
   ['What is the author’s main purpose?','To challenge the use of quoted price alone and argue for assessing costs across the complete purchasing task.'],
   ['Describe the tone of the passage.','Analytical and qualified; it questions a simple rule while also rejecting the assumption that expensive bids are necessarily better.'],
   ['Why does the author explicitly reject accepting expensive bids without scrutiny?','To limit the argument and prevent readers from confusing total-cost assessment with automatic preference for higher-priced suppliers.']
  ]},
  {title:'A longer shopping day', paragraphs:[
   'A shopping association proposed keeping stores open for two extra hours. It predicted that higher footfall would increase total sales enough to cover the added staffing cost. The proposal relied on more than the idea that some people prefer evening shopping. It also required that enough purchases would be additional rather than simply shifted from earlier hours.',
   'A useful trial would examine full-day sales and costs, not just evening receipts. Changes in weather or a nearby festival could complicate the comparison. The association would also need to consider differences between stores: the same longer schedule might benefit a food shop while adding little demand for another retailer.'
  ], questions:[
   ['What important assumption connects evening opening with higher total sales?','A sufficient share of evening purchases must be additional rather than purchases shifted from earlier hours.'],
   ['Why would evening receipts alone be an inadequate test?','They would not show whether full-day sales rose enough to cover extra costs or whether sales merely moved to the evening.'],
   ['Why does the passage caution against applying one conclusion to every store?','Different types of shops may face different demand patterns and costs.']
  ]},
  {title:'Did the discount attract new buyers?', paragraphs:[
   'An online seller introduced a discount and reported a rise in weekly orders. Its team concluded that the offer had attracted new customers. Yet the report counted orders rather than unique buyers. Existing customers might have placed several smaller orders to use the offer more than once.',
   'The campaign also coincided with a holiday, when demand usually differed from ordinary weeks. A better assessment would distinguish new and returning customers, compare relevant periods and examine revenue after discounts and fulfilment costs. No single figure would answer every question: customer acquisition, order volume and profitability describe different aspects of the campaign.'
  ], questions:[
   ['Why does higher order volume not establish an increase in new customers?','Returning customers may have placed multiple orders, so orders and unique new buyers are different measures.'],
   ['What makes the holiday relevant to evaluating the campaign?','Holiday demand could explain part of the increase independently of the discount.'],
   ['What evidence would directly address the claim about new buyers?','Verified counts of first-time customers, compared with suitable prior or comparison periods and interpreted in light of seasonal demand.']
  ]},
  {title:'Efficiency with a reserve', paragraphs:[
   'A manufacturer reduced spare inventory to avoid storage costs. In normal weeks the change worked well. When a supplier missed a shipment, however, production stopped because no reserve remained. Managers then disagreed over whether the original policy had been a mistake.',
   'One group valued the repeated savings; another emphasised the cost of the interruption. Both described real consequences, but neither observation alone settled how much stock should be held. That decision depended on the likelihood and impact of disruption, the cost of a reserve and whether alternative suppliers were available.',
   'The case illustrates a distinction between efficiency under expected conditions and resilience when conditions change. They need not be absolute opposites. Selective reserves for critical components may protect production without restoring large inventories everywhere.'
  ], questions:[
   ['How do the two groups’ arguments complement each other?','One identifies regular storage savings and the other identifies disruption costs; a sound decision must consider both.'],
   ['Why does one interruption not automatically settle the appropriate inventory policy?','The policy depends on expected disruption likelihood and impact, reserve costs and available alternatives, not a single outcome alone.'],
   ['How does the proposed selective reserve connect efficiency with resilience?','It protects critical production needs while avoiding the cost of holding large reserves of every item.']
  ]},
  {title:'Success for whom?', paragraphs:[
   'A city redesigned a market street and reported higher average sales among the businesses surveyed afterwards. Supporters treated the result as proof that the project had benefited the local trading community. However, the survey included only businesses still operating on the street. Several small traders had moved away during construction and were not interviewed.',
   'The remaining businesses may indeed have gained from better access and a more attractive environment. But excluding those who left changes the population being described. The observed average cannot reveal the experience of all original traders. Nor would interviewing only displaced traders provide a balanced account of the whole project.',
   'An evaluation should define whose outcomes matter, track changes consistently and separate the project’s effects from wider changes in demand. These requirements do not guarantee an easy verdict. They make the verdict more informative by showing how benefits and burdens were distributed rather than compressing different experiences into one reassuring average.'
  ], questions:[
   ['Identify the main weakness in the claim about the entire trading community.','The survey excludes traders who left, so results for surviving businesses cannot represent all original traders.'],
   ['Would surveying only displaced traders solve the evaluation problem? Why?','No. That would omit businesses that remained and might benefit, creating a different incomplete picture.'],
   ['Design a more defensible evaluation using the passage’s criteria.','Define the affected trader group, include those who stayed and left, track comparable outcomes over time, examine wider demand changes and report how gains and burdens differ across groups.']
  ]}
 ],
 society: [
  {title:'The library’s quiet hour', paragraphs:[
   'A public library introduced a quiet study hour every weekday afternoon. During that hour, group discussions moved to a separate room, while the main reading area remained available for individual study. Visitors did not need to book a place in advance.',
   'The librarian displayed the schedule near the entrance and asked users to leave comments on a paper form. Some visitors welcomed the arrangement, while others asked for an additional morning session. The library planned to review the comments after six weeks before changing the schedule.'
  ], questions:[
   ['When did the quiet study hour take place?','Every weekday afternoon.'],
   ['Where did group discussions move during the quiet hour?','To a separate room.'],
   ['How long did the library plan to collect comments before reviewing the schedule?','Six weeks.']
  ]},
  {title:'A clearer notice', paragraphs:[
   'A college sent students a long email describing a change in room allocations. Many students still arrived at their old classrooms. The office first sent the same email again, but confusion continued. A student representative pointed out that the changed room numbers appeared near the end of the message.',
   'The office then placed a short table of old and new rooms at the top and displayed it at the entrance. Staff planned to count misdirected arrivals during the following week. The sequence showed a shift from repeating information to making the necessary action easier to identify.'
  ], questions:[
   ['What did the office do before redesigning the notice?','It sent the same long email again.'],
   ['What change made the required action easier to find?','A short old-room/new-room table was placed at the top of the message and at the entrance.'],
   ['What would the planned count help the college assess?','Whether fewer students went to the wrong classroom after the redesigned notice.']
  ]},
  {title:'A transparent decision', paragraphs:[
   'Residents asked a community committee to make its selection of projects more transparent. They did not ask for every informal conversation to be published. They wanted clear criteria, a record of decisions and an explanation when a popular proposal was rejected.',
   'The committee agreed to publish a concise summary after each meeting. It also admitted that some applications contained ambiguous details and needed clarification. This approach aimed to make decisions intelligible without overwhelming readers with a transcript. In this context, openness depended on useful explanation, not simply on the quantity of information released.'
  ], questions:[
   ['What does “transparent” mean in relation to the committee’s decisions?','Open and understandable, with visible criteria and reasons for decisions.'],
   ['What does “ambiguous” imply about some application details?','They were unclear or could reasonably be interpreted in more than one way.'],
   ['What does “concise” mean, and why was it useful here?','Brief while retaining essential information; it helped residents understand decisions without reading an overwhelming transcript.']
  ]},
  {title:'Notifications and attention', paragraphs:[
   'A study group used an app that sent a separate notification for every message. During busy discussions, members repeatedly stopped reading to check their phones. Some muted the group entirely and then missed important schedule changes.',
   'The group created a separate channel for essential notices and collected ordinary discussion updates into a daily summary. This reduced the competition between urgent and routine information. The change did not make every message less important; it made different kinds of information easier to distinguish. Members still needed to agree on what counted as an essential notice.'
  ], questions:[
   ['How did frequent notifications contribute to missed schedule changes?','Some members muted the whole group to avoid interruptions and then missed important notices.'],
   ['Why might a separate notices channel improve the situation?','It separates urgent information from routine discussion so members can attend to it without receiving every discussion alert.'],
   ['What further agreement was necessary for the new arrangement?','Members needed a shared definition of what counted as an essential notice.']
  ]},
  {title:'Access is more than a connection', paragraphs:[
   'A school reported that all its students had access to an internet-connected device at home. Teachers nevertheless found that some students submitted work late. Interviews showed that siblings often shared one phone and that a parent took the device to work during the day in several households.',
   'The school began offering downloadable tasks and a wider submission window. Its initial device-access question had captured whether a connection existed, but not when a student could use it. The revised approach recognised that a nominal resource might not be available at the moment a task required it.'
  ], questions:[
   ['What can be inferred about the school’s initial access measure?','It was incomplete because it did not capture timing, sharing or reliable availability of a device.'],
   ['Why might a wider submission window help?','It gives students more opportunity to use a shared device when it becomes available.'],
   ['Does the passage establish that every late submission was caused by device sharing?','No. It identifies this as a barrier for some students, without explaining every late submission.']
  ]},
  {title:'The useful discomfort of practice', paragraphs:[
   'A smooth study session can be reassuring. A familiar paragraph seems easy, and a worked answer appears obvious once it is visible. But comfort is an imperfect guide to understanding. Trying to explain an idea without looking may reveal gaps that rereading leaves unnoticed.',
   'This is not a celebration of confusion for its own sake. An unsuccessful attempt becomes useful when the student receives feedback, locates the missing step and tries again. Reading and recall are partners rather than rivals. The purpose of practice is to build an explanation the learner can use, not merely to produce the pleasant sensation of recognition.'
  ], questions:[
   ['What is the author’s attitude towards comfortable study sessions?','Cautious: comfort can be reassuring but does not reliably establish understanding.'],
   ['Why does the author say reading and recall are partners?','Reading supplies ideas while recall tests understanding; feedback helps connect and improve both activities.'],
   ['What is the purpose of rejecting “confusion for its own sake”?','It clarifies that difficulty is useful only when connected to feedback and improvement, not simply because it feels hard.']
  ]},
  {title:'A portal for every resident', paragraphs:[
   'A council proposed replacing all in-person appointment booking with an online portal. It argued that online booking was available around the clock and would therefore improve access for everyone. That conclusion assumed that all users could navigate the portal and had the resources needed to do so.',
   'Supporters cited enthusiastic feedback from people who had already completed an online booking. Such feedback could describe their experience but might omit those who abandoned the process. A trial with assisted access and feedback from unsuccessful users could test the proposal more broadly. Longer opening hours in a digital system do not by themselves establish universal usability.'
  ], questions:[
   ['What assumption underlies the claim of improved access for everyone?','That everyone can obtain the necessary digital access and successfully navigate the portal.'],
   ['Why might feedback from successful users be incomplete?','It excludes people who could not complete a booking and therefore may understate access barriers.'],
   ['How would including unsuccessful users improve the trial?','It would reveal obstacles hidden by a sample limited to successful bookings and test the universal-access claim more directly.']
  ]},
  {title:'A popular video, a difficult conclusion', paragraphs:[
   'An educational channel claimed that a widely viewed revision video had improved students’ understanding. Its evidence was a large view count and positive comments. Those figures showed reach and approval, but viewers might have watched only part of the video or posted a comment before attempting a related problem.',
   'To examine learning, the channel could compare performance on relevant tasks before and after viewing, while considering other study undertaken during the period. A comparison group could add useful evidence, provided the groups were sufficiently comparable. Popularity might help distribute a useful lesson, but distribution and learning remained distinct outcomes.'
  ], questions:[
   ['What do the view count and comments support more directly than learning?','They support claims about reach and expressed approval.'],
   ['What evidence would more directly assess understanding?','Performance on relevant tasks before and after viewing, interpreted with attention to other study and suitable comparison groups.'],
   ['Why must comparison groups be sufficiently comparable?','Otherwise pre-existing differences could explain performance differences rather than the video itself.']
  ]},
  {title:'Choice inside a recommendation', paragraphs:[
   'A reading app recommends articles based on what a user has opened before. This can help the user navigate a large collection, but it can also repeatedly present familiar subjects. The same selection that reduces effort may reduce exposure to unexpected ideas.',
   'One response is to explain why each article appears. Another is to let users change the selection rules or explore an unpersonalised list. Explanation supports understanding; controls support action. Neither is sufficient if buried behind complex menus that readers cannot use.',
   'The design problem is therefore not a simple choice between personalisation and freedom. A service can offer convenient suggestions while making its influence understandable and adjustable. The user should be able to benefit from assistance without being confined to a pattern inferred from past behaviour.'
  ], questions:[
   ['How can the same recommendation system both help and limit readers?','It reduces the effort of finding articles while potentially narrowing exposure to unfamiliar subjects.'],
   ['What distinction does the passage draw between explanations and controls?','Explanations help users understand the selection; controls let them change it.'],
   ['What combined design approach follows from the argument?','Offer useful recommendations together with accessible explanations, adjustable preferences and ways to explore beyond personalisation.']
  ]},
  {title:'When participation becomes a number', paragraphs:[
   'A university measured participation in an online discussion course by counting student posts. The count rose after it became part of the assessment. Tutors, however, noticed more short repetitions of points already made. Some students who wrote few posts submitted thoughtful final essays, while frequent posting did not always indicate engagement with other arguments.',
   'Replacing the count with tutor judgement could recognise depth, but it would introduce questions about consistency and transparency. Students would need to know what counted as a substantial contribution, and tutors would need examples to calibrate their assessments. A purely mechanical measure was easy to administer, yet an unexplained qualitative judgement could be difficult to trust.',
   'The problem is not resolved by declaring numbers worthless or judgement infallible. A defensible approach connects assessment with the intended learning, uses clear criteria and reviews cases where indicators disagree. Participation matters because it can develop reasoning; the visible act of posting is only one possible trace of that process.'
  ], questions:[
   ['Evaluate the claim that more posts demonstrate better engagement.','It is too strong: increased counts included repeated points, and posting frequency did not consistently reflect thoughtful reasoning or engagement.'],
   ['What risks arise if tutor judgement completely replaces counting without further design?','Judgements may be inconsistent or opaque unless criteria and calibration examples make them understandable and comparable.'],
   ['Recommend an assessment approach consistent with the passage.','Use clear criteria tied to reasoning, combine relevant indicators and qualitative review, and investigate disagreements between posting activity and the quality of students’ work.']
  ]}
 ]
};
