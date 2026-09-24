// Original editorial models for practice; not official exam answers or live statistics.
const TOPIC_BANK = [
  {
    "id": "topic-01",
    "category": 1,
    "title": "Central Bank Digital Currency (CBDC): the future of the e-Rupee",
    "paragraphs": [
      "The e-Rupee debate is about the design of public money, not simply another payment application. A digital form of sovereign currency should be assessed by what it adds to existing payment choices.",
      "Possible benefits include new settlement arrangements and carefully designed offline use cases. These possibilities need practical testing, particularly where connectivity is weak and users require simple ways to recover access.",
      "Replacing cash too quickly could exclude people who lack reliable devices or prefer physical money. Privacy, operational resilience and the effect on bank funding also deserve scrutiny rather than assumptions.",
      "A balanced approach would test specific use cases, publish evidence and preserve usable alternatives. Success should mean safer, more accessible payments; the disappearance of banknotes is not a necessary measure of progress."
    ]
  },
  {
    "id": "topic-02",
    "category": 1,
    "title": "Non-Performing Assets (NPAs) and India’s economic health",
    "paragraphs": [
      "Stressed bank loans matter because the ability to recognise and resolve losses influences confidence and future lending. The debate should distinguish recovering old debt from preventing the next cycle of weak credit decisions.",
      "Insolvency mechanisms and specialist asset-resolution institutions can help organise negotiations and transfer troubled assets to teams equipped to manage them. Effective resolution may release resources for productive activity instead of prolonging uncertainty.",
      "A transfer to a bad bank does not itself create a recovery. Delayed proceedings, unrealistic valuations and weak incentives can move a loss between institutions without addressing its economic cause.",
      "Policy should combine transparent recognition, credible valuations and timely resolution with better loan appraisal. Recovery percentages must be interpreted alongside time taken, costs and the basis against which the recovery is measured."
    ]
  },
  {
    "id": "topic-03",
    "category": 1,
    "title": "Privatization versus consolidation of public sector banks",
    "paragraphs": [
      "Bank ownership and bank size are different questions. Privatization changes control, while consolidation combines institutions; neither automatically answers how a bank should balance commercial discipline with its public-service responsibilities.",
      "Reform can provide an opportunity to improve management incentives, share technology and reduce duplicated operations. A stronger institution may be better placed to invest in service quality and professional credit assessment.",
      "However, concentration can reduce local choice, and integration can disrupt staff and customers. Commercial incentives may also conflict with serving remote or less profitable communities unless responsibilities are clearly designed.",
      "The decision should compare measurable service, governance and competition outcomes rather than assume one ownership label guarantees success. Inclusion obligations should be explicit, funded transparently and evaluated alongside the health of the institution."
    ]
  },
  {
    "id": "topic-04",
    "category": 1,
    "title": "Regional Rural Banks and Small Finance Banks",
    "paragraphs": [
      "Access to credit depends partly on institutions understanding local livelihoods. Regional Rural Banks and Small Finance Banks belong in a discussion of how smaller borrowers can be served without ignoring repayment capacity.",
      "Local knowledge can help lenders understand seasonal income and businesses with limited formal records. Smaller loan products and accessible service points may connect households and enterprises with dependable financial services.",
      "Geographical concentration can expose a lender to the same local shock affecting many borrowers. Weak governance, expensive operations or pressure to expand quickly can undermine the advantages of specialised attention.",
      "A sustainable approach would combine local relationships with sound risk controls, staff capability and affordable technology. Evaluation should consider useful access, customer treatment and portfolio resilience rather than counting loans alone."
    ]
  },
  {
    "id": "topic-05",
    "category": 1,
    "title": "Ethical banking and corporate governance",
    "paragraphs": [
      "Trust in a bank rests on the belief that entrusted funds and customer information will be handled responsibly. Ethical banking therefore concerns everyday decisions and incentives, not merely statements issued after a scandal.",
      "Independent oversight, credible internal audit and channels for raising concerns can reveal conflicts before they become widespread failures. Clear responsibility also makes it easier to correct errors and explain decisions to customers.",
      "Formal committees are insufficient when rewards encourage mis-selling or when influential borrowers escape scrutiny. An institution can appear compliant while discouraging employees from reporting behaviour that threatens its reputation.",
      "Governance should connect board oversight with incentives, internal controls and protection for good-faith reporting. The practical test is whether harmful conduct is detected and corrected, including when doing so is commercially uncomfortable."
    ]
  },
  {
    "id": "topic-06",
    "category": 1,
    "title": "Green banking and sustainable finance",
    "paragraphs": [
      "Banks influence the transition to a lower-carbon economy through the activities they finance. Green banking should therefore be judged by the credibility of funded changes, not only by the environmental language attached to financial products.",
      "Well-designed finance can support cleaner energy, efficiency upgrades and adaptation to climate risks. It can also help viable firms fund a transition that would be difficult to finance from current cash flows.",
      "The main danger is greenwashing: an attractive label may conceal weak environmental outcomes. Long project horizons, uncertain demand and inconsistent reporting also make it difficult to compare risks and verify claims.",
      "Lenders should define eligible uses, assess transition plans and monitor outcomes over time. Climate ambition and prudent lending need to work together so that projects are both environmentally credible and financially sustainable."
    ]
  },
  {
    "id": "topic-07",
    "category": 1,
    "title": "Inflation targeting: price stability and growth",
    "paragraphs": [
      "Inflation policy involves managing the purchasing power of money while recognising the costs of restraining demand. The central question is not whether growth or stability matters more, but how policy responds to different sources of pressure.",
      "A credible framework can guide expectations and make decisions easier to explain. When households and firms understand the objective, temporary shocks need not automatically become lasting assumptions about future price increases.",
      "Interest rates cannot directly produce a missing crop or repair a disrupted supply route. Tightening may weaken borrowing and investment before a supply shortage eases, creating difficult choices about timing and persistence.",
      "A balanced response should examine the breadth and duration of inflation, communicate uncertainty and coordinate with supply-side measures. Essays should distinguish the current policy rate from the inflation objective and date any figures used."
    ]
  },
  {
    "id": "topic-08",
    "category": 1,
    "title": "Offshore banking, IFSC and GIFT City",
    "paragraphs": [
      "An international financial centre seeks to connect domestic capabilities with global financial activity. The case for GIFT City should be assessed through the quality of intermediation, professional services and institutional trust it can support.",
      "Concentrated expertise can help firms access specialised finance and manage international transactions. A predictable operating environment may also encourage activities that would otherwise be organised through overseas financial centres.",
      "A favourable location or incentive is not enough to create lasting competitiveness. Complex cross-border risks, inconsistent regulation and weak dispute resolution can deter users even when the headline offering looks attractive.",
      "Durable success would require capable supervision, skilled professionals and reliable legal processes. The aim should be useful financial activity and transparent risk management, rather than growth in registrations disconnected from economic value."
    ]
  },
  {
    "id": "topic-09",
    "category": 2,
    "title": "AI in banking: better service and automated fraud",
    "paragraphs": [
      "Artificial intelligence can assist banks with repetitive tasks and the analysis of unusual patterns. Its value depends on how it is used, supervised and challenged, rather than on the sophistication of the model alone.",
      "Assisted customer support and anomaly detection may improve speed and help staff focus on difficult cases. Used carefully, such systems can make routine information easier to access while supporting more consistent initial screening.",
      "The same tools can amplify impersonation and generate convincing fraudulent messages. Within a bank, biased data or confident but incorrect outputs may also cause unfair decisions and make accountability harder to trace.",
      "Deployment should pair testing with human escalation, limited access to sensitive data and ongoing monitoring. Customers need effective ways to contest errors; efficiency is not a substitute for responsibility when decisions affect their finances."
    ]
  },
  {
    "id": "topic-10",
    "category": 2,
    "title": "Cybersecurity in digital payment ecosystems",
    "paragraphs": [
      "Digital payments depend on a chain of users, applications, banks and service providers. Protecting that chain requires attention to both technical weaknesses and the social methods attackers use to persuade people to act.",
      "Stronger authentication, careful access management and reliable recovery arrangements can reduce the consequences of compromised systems. Shared learning about incidents can also help institutions address recurring weaknesses before attackers exploit them again.",
      "Phishing can defeat a technically sound process by persuading a user to authorise the wrong action. Ransomware and supplier failures may disrupt availability, while confusing complaint processes can increase losses after an incident.",
      "Security programmes should combine prevention, detection, response and restoration. Public education matters, but responsibility should not be shifted entirely onto users; institutions must design services that anticipate mistakes and support timely reporting."
    ]
  },
  {
    "id": "topic-11",
    "category": 2,
    "title": "Neo-banks and branchless banking",
    "paragraphs": [
      "Branchless services challenge the assumption that every banking task requires a physical visit. The useful question is which tasks can be made easier digitally and which still benefit from personal assistance or a local presence.",
      "Digital interfaces can reduce travel and provide convenient access to routine information. Specialised services may also meet needs that traditional interfaces handle poorly, such as organising a small business’s daily cash records.",
      "A smooth application does not remove the need to understand who holds funds and who is responsible for complaints. Complex disputes, low digital confidence and unreliable connectivity can make fully remote service unsuitable for some users.",
      "A mixed service model may be more inclusive than declaring branches obsolete. Compare accessibility, reliability and accountability across channels, and verify the provider’s current regulatory status instead of treating every financial application as a licensed bank."
    ]
  },
  {
    "id": "topic-12",
    "category": 2,
    "title": "BNPL and unregulated digital lending",
    "paragraphs": [
      "Buy Now, Pay Later arrangements and digital lending should be evaluated through the obligations they create for borrowers. Easy access can be useful, but an effortless checkout should not hide the cost or consequences of borrowing.",
      "A clearly disclosed short-term credit product may help some households manage the timing of expenses. Digital processes can also reduce paperwork and widen access where conventional application procedures are difficult to navigate.",
      "Repeated small loans can accumulate into obligations that are hard to track. Aggressive collection, unclear fees and intrusive data collection create additional risks, particularly when borrowers cannot identify an accountable regulated lender.",
      "Consumer protection requires understandable total costs, appropriate assessment of repayment capacity and accessible redress. Regulation should distinguish legitimate products from abusive conduct while avoiding the assumption that every fast loan is affordable credit."
    ]
  },
  {
    "id": "topic-13",
    "category": 2,
    "title": "Data privacy and confidentiality: evaluating the DPDP framework",
    "paragraphs": [
      "Digital banking depends on information, but collecting more data is not automatically a better service. A privacy framework should help define why information is needed, who can use it and how individuals can seek correction or redress.",
      "Clear notices and disciplined data handling can strengthen trust while allowing useful services to operate. Limiting access and retention can also reduce the exposure created when systems or employees mishandle sensitive records.",
      "A long consent notice may satisfy a formal process without giving customers meaningful understanding. Outsourced services, uneven implementation and uncertainty about applicable obligations can make accountability difficult to follow across organisations.",
      "A strong essay should compare principles with practical enforcement and institutional capacity. Check the current Act, notified rules and commencement provisions before making legal claims; the existence of a framework does not by itself establish effective protection."
    ]
  },
  {
    "id": "topic-14",
    "category": 2,
    "title": "Deepfakes and generative AI",
    "paragraphs": [
      "Synthetic media can imitate familiar voices and appearances, weakening the assumption that seeing or hearing something proves its authenticity. The challenge is to preserve legitimate creative use while limiting deception and harm.",
      "Generative tools can support accessibility, translation and creative production. Clear labelling and reliable provenance information may help audiences understand how content was made without treating every edited image as inherently malicious.",
      "Impersonation can damage reputations, manipulate public discussion and enable financial fraud. Detection tools may make mistakes, and a society that distrusts every recording can also find it harder to recognise genuine evidence.",
      "Responses should combine verification habits, accountable platform processes and proportionate remedies for misuse. No single detector can replace contextual investigation, and safeguards should protect expression while addressing demonstrable deception and harm."
    ]
  },
  {
    "id": "topic-15",
    "category": 2,
    "title": "Blockchain beyond cryptocurrency",
    "paragraphs": [
      "A shared ledger can be useful when several organisations need a common record but do not want a single participant to control it. This is a coordination problem, not a reason to replace every database.",
      "Applications might include tracking supply-chain events or coordinating trade documents across institutions. Carefully designed smart contracts can automate agreed steps when the relevant conditions are clear and dependable inputs are available.",
      "A ledger cannot make an incorrect real-world claim true. Bad source data, unclear responsibility and difficult correction procedures can preserve errors more efficiently, while added complexity may outweigh the gains for a simple workflow.",
      "Projects should begin with a specific coordination need and compare simpler alternatives. Governance, reliable inputs and ways to handle disputes are as important as the technical ability to record transactions across multiple participants."
    ]
  },
  {
    "id": "topic-16",
    "category": 3,
    "title": "India’s $7 trillion economy ambition by 2030",
    "paragraphs": [
      "A dollar-denominated output milestone is a useful discussion prompt, but it is not a guaranteed forecast or a complete measure of development. Its interpretation depends on the date, price basis and assumptions behind the projection.",
      "Investment, productive employment and stronger infrastructure can expand economic capacity. Improvements in skills and competition may help firms produce more value rather than rely only on increases in population or spending.",
      "Exchange-rate movements and inflation can alter the dollar value of output without producing equivalent improvements in living standards. Weak job creation or uneven regional opportunity can also coexist with rapid aggregate expansion.",
      "The ambition should be assessed alongside productivity, real household incomes and broad access to opportunity. Use dated official projections where available, explain their assumptions and avoid presenting a target as an already achieved outcome."
    ]
  },
  {
    "id": "topic-17",
    "category": 3,
    "title": "MSMEs and the Indian economy",
    "paragraphs": [
      "Micro, small and medium enterprises connect entrepreneurship with local employment and supply networks. Their contribution depends not only on the number of firms but also on whether viable businesses can survive, invest and become more productive.",
      "Better access to working capital, dependable payments and appropriate technology can support expansion. Shared services and training may help smaller firms reach customers and meet quality requirements that would otherwise be expensive to achieve individually.",
      "More lending alone will not solve weak demand, delayed buyer payments or poor business records. Compliance processes can also consume a disproportionate share of the time available to very small enterprises.",
      "Support should combine timely payments, suitable finance, simpler processes and practical capability building. Evaluate productivity and business resilience as well as registrations, and state the year and definition behind any quoted MSME contribution statistic."
    ]
  },
  {
    "id": "topic-18",
    "category": 3,
    "title": "The gig economy: flexibility and social protection",
    "paragraphs": [
      "Platform-mediated work raises questions about flexibility, bargaining power and the distribution of business risk. A balanced discussion should recognise different worker circumstances rather than treat every gig arrangement as either liberation or exploitation.",
      "Flexible entry and scheduling can create earning opportunities for some workers. Digital matching can also connect customers with services that would otherwise require expensive search, administration or a permanent employment arrangement.",
      "Income may be unpredictable while workers bear equipment, waiting-time and accident risks. Opaque allocation systems and unilateral changes to terms can weaken meaningful choice even when workers are formally free to log off.",
      "Policy should examine portable protection, transparent terms and effective channels for contesting decisions. The goal is to preserve useful flexibility while ensuring that convenience for customers does not depend on making workers absorb every uncertainty."
    ]
  },
  {
    "id": "topic-19",
    "category": 3,
    "title": "PM Gati Shakti and the National Logistics Policy",
    "paragraphs": [
      "Logistics performance depends on how transport, storage and administrative processes connect. Discussing Gati Shakti and the National Logistics Policy therefore requires more than listing individual roads, terminals or digital platforms.",
      "Coordinated planning can reduce mismatches between infrastructure projects and the routes businesses actually use. Better information and smoother connections may reduce delays and make delivery schedules more dependable for manufacturers and smaller suppliers.",
      "Building capacity without addressing last-mile links or operating procedures can leave bottlenecks in place. Published cost estimates may also use different definitions, so a striking national percentage should not be accepted without checking its methodology.",
      "Evaluation should connect planning with actual journey times, reliability and access for different types of firms. Infrastructure becomes competitive advantage when its parts work together and when improvements are reflected in the experience of users."
    ]
  },
  {
    "id": "topic-20",
    "category": 3,
    "title": "Atmanirbhar Bharat and PLI schemes",
    "paragraphs": [
      "Self-reliance can mean stronger domestic capabilities rather than isolation from global markets. Production incentives should be discussed in terms of what they help firms learn, build and sustain after support is reduced.",
      "Targeted incentives may encourage investment in critical production and supplier networks. If they support genuine capability development, they can make an economy less vulnerable to disruption while expanding its participation in international trade.",
      "Subsidised output is not necessarily competitive output. Poor targeting may reward activity that would have happened anyway, and excessive protection can weaken incentives to improve quality or purchase inputs efficiently.",
      "A credible approach would use transparent eligibility, measurable additional outcomes and periodic review. Success should include durable productivity and supplier capability, not merely investment announcements or production achieved while generous support remains available."
    ]
  },
  {
    "id": "topic-21",
    "category": 3,
    "title": "De-dollarization and rupee trade",
    "paragraphs": [
      "Settling trade in local currencies is one way to diversify international payment arrangements. It should be assessed as a practical tool for particular trading relationships, not as evidence that exchange-rate or geopolitical risks have disappeared.",
      "Rupee settlement may reduce the need for an intermediate currency in suitable transactions. It can also create additional payment options when firms and financial institutions are willing and able to hold the resulting currency balances.",
      "Persistent trade imbalances can leave one party with balances it cannot readily use. Liquidity, convertibility, pricing and hedging needs still matter, and changing the settlement currency does not remove the underlying commercial risk.",
      "A gradual approach should match currency arrangements to trade flows and usable financial markets. Claims about independence from global shocks need qualification: diversification may reduce some exposures while creating or leaving others unchanged."
    ]
  },
  {
    "id": "topic-22",
    "category": 3,
    "title": "Wealth inequality and a K-shaped recovery",
    "paragraphs": [
      "Aggregate growth can conceal very different experiences across households and businesses. The idea of a K-shaped recovery draws attention to groups moving in different directions rather than assuming that one national average describes everyone.",
      "Disaggregated analysis can reveal where recovery is reaching employment, earnings and consumption. That evidence can help policymakers design measures aimed at specific barriers instead of assuming that stronger output will automatically spread to all groups.",
      "However, inequality, poverty and short-term recovery are related but distinct concepts. Mixing wealth stocks with income flows or comparing incompatible surveys can produce confident claims that the underlying evidence does not support.",
      "An effective response should connect productive employment, public services and opportunity with careful measurement. Essays should identify the groups being compared, the period covered and whether the evidence concerns income, wealth or access to essential services."
    ]
  },
  {
    "id": "topic-23",
    "category": 3,
    "title": "Formalising the informal sector",
    "paragraphs": [
      "Formalisation is valuable when it improves access to protection, finance and dependable economic relationships. A registration certificate alone does not show whether a worker or enterprise is better off in daily practice.",
      "Simpler records can help viable firms build a history, participate in supply chains and use formal services. Workers may also benefit when social protection and effective grievance processes become easier to access.",
      "Costs can arrive before benefits. Complicated procedures, uncertain obligations or enforcement that ignores small firms’ capacity may discourage participation or cause livelihoods to disappear rather than improve.",
      "Policy should make entry understandable, benefits usable and compliance proportionate. The objective is a more secure and productive economy, which requires judging lived outcomes rather than equating every increase in registrations with successful inclusion."
    ]
  },
  {
    "id": "topic-24",
    "category": 4,
    "title": "PMJDY: inclusion beyond account opening",
    "paragraphs": [
      "Jan Dhan accounts belong in a broader discussion of meaningful financial inclusion. Having an account can be an important starting point, but it does not establish regular use, control over funds or confidence in resolving problems.",
      "Accounts can provide a route to receive transfers, store money and connect with other financial services. Accessible support may help people translate formal availability into useful participation in the financial system.",
      "Dormancy can reflect different barriers, including irregular income, distance, confusing processes or lack of trust. Treating every inactive account as the same problem can lead to responses that miss the user’s actual circumstances.",
      "Evaluation should combine account numbers with use, service quality and customer control. Preparation should use the latest dated PMJDY reports while distinguishing accounts from unique people and avoiding unsupported assumptions about dormant balances."
    ]
  },
  {
    "id": "topic-25",
    "category": 4,
    "title": "Agri-tech: drones, smart irrigation and digital mandis",
    "paragraphs": [
      "Agricultural technology should be evaluated by the farming problem it solves and the conditions in which it operates. Drones, irrigation tools and digital market services are not interchangeable answers to every rural challenge.",
      "Better information and suitable equipment can help farmers use inputs more carefully, identify crop problems or compare selling options. Shared services may make useful technology accessible without requiring each small farmer to purchase expensive machinery.",
      "Adoption may be limited by cost, maintenance, connectivity or advice that is poorly matched to local conditions. A digital market listing does not ensure transport, reliable grading or a buyer willing to pay the advertised price.",
      "Useful programmes should connect technology with extension support, repair services and workable market arrangements. The central measure is a sustained improvement in farmers’ decisions and livelihoods, not merely the number of devices distributed."
    ]
  },
  {
    "id": "topic-26",
    "category": 4,
    "title": "Climate change and Indian agriculture",
    "paragraphs": [
      "Agriculture depends on weather, water and ecosystems, making climate-related uncertainty a serious planning challenge. Adaptation should address the different risks faced by crops, regions and farm sizes rather than prescribe one universal response.",
      "Improved forecasting, water management and locally suitable crop choices may reduce exposure to some shocks. Stronger storage and market connections can also help protect livelihoods when production or transport is disrupted.",
      "Farmers with limited savings may find adaptation expensive, and advice can be difficult to act on without dependable inputs or local support. Focusing only on output may overlook income volatility and household food access.",
      "A practical approach would combine local research, extension services, infrastructure and appropriate risk-sharing mechanisms. Resilience means maintaining viable livelihoods through uncertainty; it should not be confused with a promise that every weather-related loss can be prevented."
    ]
  },
  {
    "id": "topic-27",
    "category": 4,
    "title": "NABARD, rural infrastructure and FPOs",
    "paragraphs": [
      "Rural development requires connections between credit, infrastructure and the ability to use both productively. A discussion of NABARD and Farmer Producer Organizations should examine how these elements support viable economic activity together.",
      "Infrastructure can improve access to water, storage and markets, while collective organisation may help producers purchase inputs or negotiate sales. Suitable finance can connect those opportunities with investments that individual farmers struggle to fund.",
      "Credit targets alone do not establish productive use or equitable access. Weak management, poor market demand and inadequate maintenance can undermine projects even when funding is available and initial construction is completed.",
      "Evaluation should follow projects beyond sanction and disbursement to service quality, governance and livelihood outcomes. Strong rural institutions need financial discipline and member accountability as well as access to funds and physical assets."
    ]
  },
  {
    "id": "topic-28",
    "category": 4,
    "title": "Rural non-farm enterprise and distress migration",
    "paragraphs": [
      "Rural opportunity need not depend entirely on agriculture. Non-farm enterprises can broaden household choices, but the aim should be to reduce migration driven by a lack of viable options rather than restrict voluntary movement.",
      "Local processing, repair, services and small manufacturing may create complementary income sources. Links with larger markets and appropriate skills can make these activities more resilient than isolated schemes that depend on temporary support.",
      "Entrepreneurship is difficult where demand, electricity, transport or finance are unreliable. Encouraging every household to start a business without examining market capacity may divide limited demand among many fragile enterprises.",
      "A credible strategy would improve shared infrastructure, skills and market connections while supporting workers who choose to move. Success is greater agency and economic security, whether a person remains in the village or migrates by choice."
    ]
  },
  {
    "id": "topic-29",
    "category": 4,
    "title": "Direct Benefit Transfer: delivery and empowerment",
    "paragraphs": [
      "Direct Benefit Transfer can be discussed as a change in the route through which support reaches people. A better delivery mechanism matters, but it cannot by itself determine whether the benefit is adequate or reaches everyone entitled to it.",
      "More traceable transfers may reduce some intermediaries and improve the ability to track payments. When accounts and withdrawal services are accessible, recipients can gain greater clarity about when support arrives and how to use it.",
      "Incorrect records, authentication problems or distant cash-out points can turn a technically completed transfer into a practical barrier. A payment marked successful may still be inaccessible to the intended person at the time it is needed.",
      "Evaluation should distinguish administrative savings from exclusions and examine the cost borne by recipients. Reliable grievance handling, correction of records and accessible withdrawal options are essential companions to a direct payment channel."
    ]
  },
  {
    "id": "topic-30",
    "category": 5,
    "title": "Women-led development and female labour participation",
    "paragraphs": [
      "Women-led development moves the discussion from access to genuine influence over economic and public decisions. Participation matters, but the quality of work, control over earnings and ability to shape institutions matter as well.",
      "Removing barriers to education, finance, mobility and leadership can widen the use of talent. Reliable care services and safe workplaces may make participation more feasible for people who otherwise face competing responsibilities.",
      "A higher participation figure can include insecure or poorly paid work. Unpaid care, limited transport and workplace discrimination can persist even when formal opportunities are announced and training enrolment increases.",
      "The approach should combine opportunity with agency, safety and institutional accountability. Use dated labour-force evidence and distinguish participation from secure employment, earnings and leadership rather than treating one indicator as a complete measure of progress."
    ]
  },
  {
    "id": "topic-31",
    "category": 5,
    "title": "India’s demographic dividend",
    "paragraphs": [
      "A large working-age population creates an opportunity, not an automatic economic dividend. The outcome depends on whether people are healthy, appropriately skilled and able to find productive work during the relevant period.",
      "Investment in education, health and job creation can turn demographic potential into higher productivity and household security. Opportunities for women and disadvantaged groups can widen the benefits instead of leaving talent underused.",
      "Training without suitable demand for skills can produce frustration rather than employment. Regional differences and unequal access to basic services can also mean that a national demographic pattern conceals very different local conditions.",
      "A credible strategy should connect human development with the creation of productive jobs and adaptable institutions. Essays should explain the time period and population group behind demographic claims instead of presenting a single national window as uniform for everyone."
    ]
  },
  {
    "id": "topic-32",
    "category": 5,
    "title": "NEP implementation and industry readiness",
    "paragraphs": [
      "Education reform should prepare people for work while also developing reasoning, communication and civic understanding. Industry readiness is important, but it should not reduce education to training for the vacancy that happens to exist today.",
      "Practical learning, stronger foundational skills and links between institutions and employers can make knowledge easier to apply. Flexible pathways may also help learners adapt as technology and the organisation of work change.",
      "Implementation depends on teachers, resources and equitable access. Partnerships can become superficial if internships lack meaningful work, while a narrow focus on immediate skills may neglect the ability to keep learning.",
      "Evaluation should examine classroom practice, learning outcomes and the quality of transitions into further study or work. A policy announcement is a starting point; sustained institutional capacity determines whether the intended changes become real opportunities."
    ]
  },
  {
    "id": "topic-33",
    "category": 5,
    "title": "The digital divide in India",
    "paragraphs": [
      "Digital inclusion involves more than the presence of a signal or a device in a household. People also need affordable access, appropriate skills, accessible design and the ability to use services when necessary.",
      "Useful connectivity can support learning, commerce and access to public services. Local-language content and assisted access may help people benefit from these opportunities without requiring expert technical knowledge.",
      "Shared devices, unreliable connections and low confidence can make nominal access inadequate. Moving essential services online without alternatives may increase the burden on precisely the users that digitisation is intended to help.",
      "Policies should assess availability, affordability, skills and successful use together. Compare rural and urban experience carefully, and treat accessible offline or assisted channels as part of inclusion rather than as evidence that digital reform has failed."
    ]
  },
  {
    "id": "topic-34",
    "category": 5,
    "title": "Universal Basic Income: feasibility and welfare",
    "paragraphs": [
      "Universal Basic Income asks whether a regular payment to everyone could provide a dependable income floor. Its appeal should be weighed against financing choices and the public services that households would still need.",
      "A predictable transfer might reduce uncertainty and simplify some eligibility processes. Universal coverage could also avoid particular exclusion errors associated with schemes that require frequent proof of changing household circumstances.",
      "The fiscal cost depends on the payment amount and population covered. Replacing essential services or targeted support without careful assessment could leave people with greater needs worse off despite receiving a universal payment.",
      "The debate should compare clearly specified designs rather than an abstract promise of income security. Assess funding, inflation risks, distributional effects and interaction with existing services, using transparent assumptions instead of claiming that simplicity makes every proposal affordable."
    ]
  },
  {
    "id": "topic-35",
    "category": 5,
    "title": "Workplace mental health and burnout",
    "paragraphs": [
      "Workplace wellbeing is an organisational issue as well as an individual concern. A discussion of burnout should examine how workload, predictability and management practices affect people rather than assume that resilience training can compensate for every condition.",
      "Supportive management, reasonable work design and accessible professional support may help employees raise concerns earlier. A culture that treats seeking help respectfully can also reduce the pressure to hide difficulties until work and relationships deteriorate.",
      "Wellbeing campaigns can become symbolic when excessive demands remain unchanged. Confidentiality concerns and fear of career consequences may also prevent people from using services, even when an employer advertises that help is available.",
      "Employers should evaluate job design and management behaviour alongside support programmes. The aim is a safer and more sustainable workplace; personal health decisions still require qualified care, and productivity should not be the only reason employee wellbeing matters."
    ]
  },
  {
    "id": "topic-36",
    "category": 5,
    "title": "Urbanisation, smart cities and affordable housing",
    "paragraphs": [
      "Urban growth creates opportunity when people can reach jobs, services and secure housing. A city cannot be judged smart solely because it installs technology while essential living conditions remain inaccessible to many residents.",
      "Integrated planning can connect housing with transport, water and public services. Better information may support maintenance and make it easier to identify where infrastructure fails or where residents struggle to obtain assistance.",
      "Housing far from employment may be nominally affordable but costly once travel and time are included. Displacement, insecure tenure and fragmented responsibility can also weaken the benefits of redevelopment for existing communities.",
      "Policy should evaluate total living costs, access and security rather than units constructed alone. Residents need a voice in planning, and technology should help institutions deliver dependable services rather than replace the underlying obligations of urban governance."
    ]
  },
  {
    "id": "topic-37",
    "category": 6,
    "title": "India’s green energy transition",
    "paragraphs": [
      "A transition towards cleaner energy involves changing a system, not merely adding generation equipment. Solar, wind and green hydrogen should be assessed alongside storage, networks, demand and the people affected by the change.",
      "Cleaner energy can diversify supply and create opportunities for industrial development. Well-matched investments may support energy security while reducing dependence on more emissions-intensive ways of producing and using energy.",
      "Variable generation needs suitable system arrangements, and hydrogen applications require careful examination of cost and demand. Land conflicts, financing risks and disruption to existing livelihoods can also make transition choices difficult.",
      "A credible pathway should connect capacity additions with reliable supply, affordable use and support for affected communities. Distinguish installed capacity from actual generation and avoided emissions when preparing evidence for an essay."
    ]
  },
  {
    "id": "topic-38",
    "category": 6,
    "title": "Climate finance and the Loss and Damage Fund",
    "paragraphs": [
      "The debate over climate finance concerns responsibility, capacity and the practical ability to respond to harm. Support for mitigation, adaptation and loss and damage addresses related but different needs and should not be treated as one undifferentiated promise.",
      "Predictable finance can help vulnerable countries plan instead of reacting only after a disaster. Accessible arrangements may also support local priorities that receive insufficient funding through ordinary commercial channels.",
      "Pledges do not necessarily become timely disbursements. Complex access conditions, debt burdens and disagreement about responsibility can weaken the usefulness of support even when impressive headline amounts are announced.",
      "Evaluation should distinguish promised, committed and delivered resources and examine who controls their use. A fair framework needs accountability on both provision and implementation, without ignoring the unequal exposure and capacity of different countries."
    ]
  },
  {
    "id": "topic-39",
    "category": 6,
    "title": "E-waste and the circular economy",
    "paragraphs": [
      "Electronic products create value during use but can create environmental and health burdens when discarded badly. A circular approach asks how design, repair, reuse and material recovery can extend that value before disposal becomes necessary.",
      "Repairable products and dependable collection can reduce unnecessary replacement. Recovering useful materials from discarded equipment may also lessen demand for new extraction when collection and processing are technically and economically sound.",
      "Unsafe handling can shift the burden onto workers and nearby communities. Recycling claims may obscure poor traceability, while consumers may replace products early because repair is costly, parts are unavailable or software support ends.",
      "Policy should connect product design, producer responsibility and safe recovery with the realities of informal work. The objective is less waste and better resource use, not simply a higher reported collection figure without evidence of responsible processing."
    ]
  },
  {
    "id": "topic-40",
    "category": 6,
    "title": "Electric vehicles: batteries, charging and incentives",
    "paragraphs": [
      "Electric-vehicle adoption depends on whether a vehicle meets users’ needs at an acceptable total cost. The discussion should connect battery performance, charging access and energy supply rather than focus only on the purchase subsidy.",
      "Suitable vehicles can reduce local exhaust emissions and offer operating advantages in some use cases. Predictable charging and service arrangements may make adoption easier for fleets or households with regular travel patterns.",
      "High initial costs, limited charging access and concerns about battery life can restrict adoption. Environmental assessment also needs to consider electricity generation, materials and end-of-life handling rather than assuming that every part of the lifecycle is emissions-free.",
      "A balanced strategy would target practical use cases, improve charging reliability and support responsible battery management. Incentives should be reviewed against sustained adoption and wider benefits, with current scheme details checked before they are quoted."
    ]
  },
  {
    "id": "topic-41",
    "category": 6,
    "title": "Water scarcity and urban flooding",
    "paragraphs": [
      "Water scarcity and flooding can coexist because cities may fail to store, absorb or manage water effectively across seasons. Treating them as unrelated emergencies can miss the role of land use and infrastructure in both problems.",
      "Protection of water bodies, maintenance of drainage and suitable local storage can support more resilient water management. Better coordination may help a city use rainfall as a resource while reducing exposure to intense runoff.",
      "Unplanned construction can obstruct natural drainage and increase demand on limited supplies. Large engineering projects may underperform when maintenance, waste management or the needs of vulnerable settlements receive insufficient attention.",
      "Cities should connect watershed thinking with land-use decisions and dependable basic services. Evaluate prevention and maintenance as well as emergency response, and recognise that a single technology cannot compensate for neglect across the urban water system."
    ]
  },
  {
    "id": "topic-42",
    "category": 7,
    "title": "Digital Public Infrastructure as India’s soft power",
    "paragraphs": [
      "Digital Public Infrastructure can become a source of international influence when it offers useful lessons in building interoperable public systems. Sharing experience is different from assuming that another country should copy an entire institutional model.",
      "Open standards and adaptable building blocks may help countries design identity, payment or document services around their own needs. Cooperation can deepen technical relationships while reducing dependence on isolated proprietary solutions.",
      "Institutions, legal safeguards and patterns of access differ across countries. Exporting a technical component without governance capacity or appropriate protections can reproduce exclusion and concentrate risks rather than deliver useful public infrastructure.",
      "International cooperation should support local ownership, interoperability and accountable implementation. The strength of soft power lies in credible and adaptable results, not simply in counting agreements or presenting every overseas adoption as a copy of India’s system."
    ]
  },
  {
    "id": "topic-43",
    "category": 7,
    "title": "One Nation, One Election",
    "paragraphs": [
      "Synchronising election schedules raises questions about administration, public spending and democratic accountability. A balanced essay should compare potential efficiencies with the constitutional and political arrangements required to make a common schedule workable.",
      "A coordinated timetable could reduce repeated logistical mobilisation and periods of campaign-related disruption. Supporters may also argue that predictable scheduling helps governments and institutions plan their activities more consistently.",
      "Different institutions have distinct mandates, and governments may lose support before a scheduled election. Handling premature dissolution could require difficult design choices, while national campaigns might overshadow local concerns.",
      "The proposal should be evaluated through specific arrangements for terms, accountability and exceptional situations. Verify the current legislative position before making legal claims, and distinguish estimated savings from demonstrated outcomes under a fully specified system."
    ]
  },
  {
    "id": "topic-44",
    "category": 7,
    "title": "China + 1 and global supply chains",
    "paragraphs": [
      "The search for diversified supply chains creates an opportunity for India, but an opportunity is not a guaranteed relocation of production. Firms compare reliability, costs, skills and access to suppliers when choosing where to operate.",
      "Investment can bring productive employment and stronger links with global buyers. Domestic suppliers may also gain capabilities when they meet demanding standards and build sustained relationships rather than participate only in final assembly.",
      "Infrastructure gaps, inconsistent delivery and limited specialised skills can prevent announcements from becoming competitive production. Excessive dependence on a small number of buyers or imported components can leave vulnerabilities despite geographical diversification.",
      "India’s response should connect predictable policy with logistics, skills and supplier development. Evaluate realised investment, domestic value creation and job quality, not just the number of firms expressing interest in an alternative production location."
    ]
  },
  {
    "id": "topic-45",
    "category": 7,
    "title": "E-commerce and online gaming: ethical regulation",
    "paragraphs": [
      "E-commerce and online gaming involve different activities, but both raise questions about how digital businesses influence decisions and handle user risk. Regulation should begin with the specific conduct and harms being addressed.",
      "Clear rules can improve trust and allow responsible businesses to plan. Transparent terms, fair complaints processes and understandable pricing may strengthen participation without requiring consumers to master complex contractual language.",
      "Dark patterns, misleading promotions and unfair restrictions can undermine meaningful choice. Treating every business model as identical may also produce rules that are either too weak for serious harms or unnecessarily burdensome for lower-risk activity.",
      "A proportionate framework should distinguish activities, identify accountable parties and offer effective remedies. Legal classifications and restrictions can change, so essays should verify current rules rather than assume that all gaming or all platform conduct is governed in the same way."
    ]
  },
  {
    "id": "topic-46",
    "category": 7,
    "title": "The space economy and private participation",
    "paragraphs": [
      "Commercial participation in space should be discussed as an expansion of capabilities and services, not simply as a change in who launches a rocket. Public research and private enterprise can play complementary roles.",
      "Specialised firms may develop components, services and applications that broaden the use of space-based information. Competition and collaboration can also help translate research capabilities into products for agriculture, communication or infrastructure planning.",
      "High costs, uncertain demand and long development periods can make ventures fragile. Safety, liability, access to shared infrastructure and the management of orbital risks require clear responsibility rather than an assumption that commercialisation removes public obligations.",
      "A sound approach would provide predictable authorisation, capable oversight and access arrangements that support innovation. Distinguish announced investment from sustainable revenue, and assess whether commercial growth produces useful services while protecting safety and long-term access to space."
    ]
  },
  {
    "id": "topic-47",
    "category": 7,
    "title": "Multilateralism and the relevance of the UN",
    "paragraphs": [
      "The difficulty of resolving major conflicts can weaken confidence in multilateral institutions. Yet evaluating the United Nations only by its success in stopping every war overlooks the different functions performed across its system.",
      "Shared forums can support negotiation, humanitarian coordination and common standards even when governments disagree sharply. These functions may remain valuable precisely because no single state can organise every cross-border response legitimately or effectively.",
      "Power imbalances and competing national interests can obstruct action and damage legitimacy. An institution may offer a platform for discussion without having the authority or political support needed to enforce a particular settlement.",
      "Reform should address representation, accountability and the limits of decision-making mechanisms while preserving useful cooperation. The strongest argument distinguishes failure in a specific task from total institutional irrelevance, rather than treating either criticism or defence as all-or-nothing."
    ]
  },
  {
    "id": "topic-48",
    "category": 7,
    "title": "Corporate Social Responsibility: impact or compliance",
    "paragraphs": [
      "Corporate Social Responsibility can be approached as a contribution to social outcomes or as a reporting obligation. The distinction becomes visible when companies decide which activities to support and how to judge their effects.",
      "Thoughtful programmes can bring resources, skills and sustained partnerships to community priorities. Aligning projects with local needs may create value that continues after the initial funding period or public announcement.",
      "Spending alone does not establish impact. Short projects chosen for publicity, weak consultation or inadequate maintenance can create attractive reports without improving the conditions they claim to address.",
      "Evaluation should examine needs, participation, implementation and lasting outcomes as well as compliance. Verify current legal obligations separately; a company can satisfy a spending process while still needing to demonstrate that its chosen intervention was useful."
    ]
  },
  {
    "id": "topic-49",
    "category": 7,
    "title": "Social media regulation: expression and disinformation",
    "paragraphs": [
      "Regulating social media requires attention to both the harm caused by deceptive or abusive content and the value of legitimate expression. A democratic approach must ask who decides, by what standards and with what opportunity for challenge.",
      "Clear procedures can help platforms respond more consistently to harmful conduct. Transparency about enforcement and accessible reporting may also make it easier for users to understand how decisions affect public discussion.",
      "Overbroad restrictions can suppress criticism or minority viewpoints, while inconsistent enforcement can leave serious harms unaddressed. Automated tools may misread context, particularly across languages, satire and politically contested claims.",
      "Rules should be precise, proportionate and supported by review and appeal. The aim is accountable governance of platforms, not a promise that one authority or algorithm can eliminate falsehood while making no mistakes about lawful speech."
    ]
  },
  {
    "id": "topic-50",
    "category": 7,
    "title": "Viksit Bharat @2047",
    "paragraphs": [
      "A vision of a developed India should connect economic ambition with the quality of everyday life. A future milestone is meaningful when it guides practical decisions about productivity, institutions, opportunity and environmental sustainability.",
      "Investment in skills, health, infrastructure and innovation can reinforce one another. Strong public services and fair access to markets may help more people participate in growth instead of treating inclusion as something to consider after expansion.",
      "Long-term visions can become lists of aspirations without clear priorities or implementation capacity. Unequal opportunity, weak urban services and environmental stress can also prevent higher output from translating into broadly shared improvements.",
      "A credible roadmap should identify milestones, responsibilities and ways to revise policy when evidence changes. Progress needs several measures, including productive work and dependable services, rather than a single aggregate target presented as a complete definition of development."
    ]
  }
];
const TOPIC_CATEGORIES = [
 {id:1,name:'Banking, Monetary Policy & Financial Sector Reforms',checks:['RBI policy rates and decision date','Gross versus net NPA ratios and reporting period','MUDRA sanctions versus disbursements','Financial Inclusion Index and reference year','e-Rupee pilot coverage and publication date'],sources:[['RBI: publications and policy','https://www.rbi.org.in/'],['RBI: e-Rupee FAQ','https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3686']]},
 {id:2,name:'FinTech, Artificial Intelligence & Cybersecurity',checks:['UPI volume versus value, with month and units','CERT-In incident definitions and reporting period','AI adoption survey sample and methodology','Applicable IT Act provisions and current notifications','DPDP Act, notified rules and commencement dates'],sources:[['NPCI: UPI statistics','https://www.npci.org.in/product/upi/product-statistics'],['MeitY: data protection framework','https://www.meity.gov.in/data-protection-framework']]},
 {id:3,name:'Economy, Infrastructure & Trade',checks:['GDP: nominal versus real; rupees versus US dollars','Treat $5T / $7T milestones as dated targets or projections','MSME contribution: definition and reporting year','Merchandise versus services trade; exports versus imports','Logistics cost estimates and measurement method'],sources:[['Ministry of Finance: Economic Survey','https://www.indiabudget.gov.in/economicsurvey/']]},
 {id:4,name:'Agriculture, Rural Development & Financial Inclusion',checks:['PM-KISAN coverage and payment period','PMJDY accounts, balances and reporting date','Agriculture’s output share versus employment share','Agri-tech investment coverage and source','NABARD credit targets versus actual disbursement; FPO outcomes'],sources:[['PMJDY: bankwise progress','https://www.pmjdy.gov.in/account'],['Economic Survey: agriculture and rural economy','https://www.indiabudget.gov.in/economicsurvey/']]},
 {id:5,name:'Social Issues, Human Capital & Education',checks:['Demographic projections: age bands and reference years','PLFS participation, employment and gender comparisons','NFHS indicators with survey round; use appropriate education surveys for literacy','Gender earnings gaps: measure, sample and work type','NEP targets versus implementation outcomes'],sources:[['MoSPI: Periodic Labour Force Survey','https://www.mospi.gov.in/themes/product/69-periodic-labour-force-survey-plfs'],['Economic Survey: social sectors','https://www.indiabudget.gov.in/economicsurvey/']]},
 {id:6,name:'Environment, Sustainability & Energy Transition',checks:['Panchamrit commitments: target year and exact measure','Renewable installed capacity versus actual generation','Green hydrogen targets versus commissioned projects','Carbon credits: issuance, trading and verified reduction','Current EV incentives and responsible battery disposal'],sources:[['MNRE: physical achievements','https://mnre.gov.in/en/physical-progress/'],['Economic Survey: climate and energy','https://www.indiabudget.gov.in/economicsurvey/']]},
 {id:7,name:'Governance, Policy & Global Geopolitics',checks:['DPI use metrics: accounts, transactions and unique users differ','G20 commitments versus delivered outcomes','Current bill, Act, rule and commencement status','Space-economy estimates and definition','CSR obligations versus measured impact; Viksit Bharat milestones'],sources:[['MEA: G20 New Delhi Leaders’ Declaration','https://www.mea.gov.in/Images/CPV/G20-New-Delhi-Leaders-Declaration.pdf'],['MeitY: data protection framework','https://www.meity.gov.in/data-protection-framework']]}
];
const TOPIC_LEVELS = [
 ['Main idea',5],['Argument structure',5],['Paraphrasing',6],['Cause and effect',6],['Inference',7],
 ['Tone and purpose',7],['Assumptions',8],['Evidence',8],['Synthesis',9],['Critical evaluation',10]
].map(([name,minutes],i)=>({level:i+1,name,minutes}));
function topicQuestions(topic, level) {
 const [thesis,benefit,risk,response] = topic.paragraphs;
 const subject = topic.title;
 const questions = [
  [
   [`What central issue does “${subject}” ask the reader to consider?`,thesis],
   ['Identify an opportunity described in paragraph 2.',benefit],
   ['What limitation or risk is discussed in paragraph 3?',risk]
  ],
  [
   [`Outline how the argument about ${subject} develops across the four paragraphs.`,`It frames the issue, describes an opportunity, qualifies it with risks, then proposes a balanced response. ${response}`],
   ['How does paragraph 3 qualify the opportunity described earlier?',`${benefit} However, ${risk.charAt(0).toLowerCase()+risk.slice(1)}`],
   ['What function does the final paragraph serve?',`It draws a practical conclusion from the earlier opportunity and limitation: ${response}`]
  ],
  [
   [`Restate the central position on ${subject} in your own words.`,thesis],
   ['Explain the opportunity in paragraph 2 without copying the wording.',benefit],
   ['Summarise the proposed response in two sentences. Preserve the qualification.',response]
  ],
  [
   [`For ${subject}, explain how the opportunity could lead to a useful outcome.`,benefit],
   ['Describe how a risk in paragraph 3 could weaken that outcome.',risk],
   ['Connect one proposed response with the problem it is intended to address.',`${risk} The response should be connected to that concern: ${response}`]
  ],
  [
   [`What does the passage imply would be an inadequate way to judge progress on ${subject}?`,`A judgement that considers only the opportunity while ignoring the stated limitations would be incomplete. ${risk} ${response}`],
   ['Does the author reject the opportunity entirely? Support your inference.',`No. The author recognises an opportunity, then qualifies it: ${benefit} ${risk}`],
   ['What can be inferred about the importance of implementation?',`The proposed benefits are conditional on dealing with the identified constraints. ${response}`]
  ],
  [
   [`Describe the author’s tone towards ${subject}, using evidence from the passage.`,`Analytical and qualified. The passage considers a possible benefit (${benefit}) but also a limitation (${risk}).`],
   ['Why does the author include both an opportunity and a counterpoint?',`To avoid treating a possible benefit as an unconditional outcome. The opportunity is: ${benefit} The counterpoint is: ${risk}`],
   ['What is the main purpose of the concluding paragraph?',`To translate the balanced discussion into a considered position rather than an unconditional endorsement or rejection. ${response}`]
  ],
  [
   [`Identify a condition that would need to hold for the proposed approach to ${subject} to work.`,`One defensible answer is that the proposed measures can be implemented well enough to address the stated risks. Specify a measure from this conclusion: ${response}`],
   ['What would be wrong with assuming that the opportunity guarantees the outcome?',`It ignores conditions and obstacles explicitly identified in the passage: ${risk}`],
   ['Is the concluding recommendation proven simply because it is proposed? Explain.',`No. A recommendation is an argument, not proof of effectiveness. It would need evidence that it addresses the stated problem: ${risk}`]
  ],
  [
   [`What evidence would help evaluate the proposed response to ${subject}?`,`Use evidence tied to the desired outcome and the stated risk, with a clear period and comparison. Evaluate the measures proposed here: ${response}`],
   ['Why would one favourable headline indicator be insufficient?',`It might leave the stated costs, distributional effects or implementation risks unmeasured. A useful evaluation should address: ${risk}`],
   ['How should a numerical claim be checked before it is used to support this argument?',`Check the original source, reporting date, units, definition and comparison group. Explain how the number bears on this argument, rather than treating a target or announcement as an observed outcome.`]
  ],
  [
   [`Write a balanced two-part judgement on ${subject}.`,`${benefit} This should be qualified by the following consideration: ${risk}`],
   ['Connect the opening concern to the final recommendation.',`${thesis} The proposed way of responding to that concern is: ${response}`],
   ['What would a one-sided summary leave out?',`A purely positive summary would omit ${risk.charAt(0).toLowerCase()+risk.slice(1)} A purely negative summary would overlook ${benefit.charAt(0).toLowerCase()+benefit.slice(1)}`]
  ],
  [
   [`Evaluate the argument on ${subject}. Identify one strength and one limitation of the passage itself.`,`A strength is that it weighs an opportunity against a constraint and offers a response. A limitation is that this short editorial does not supply empirical proof that the recommendation will work. Its central recommendation is: ${response}`],
   ['Propose a counterargument, then explain how you would investigate it fairly.',`A defensible counterargument could question feasibility or whether the proposed measures adequately address the identified risks. State a concrete claim, seek comparable evidence and evaluate both benefits and burdens. Relevant risks are: ${risk}`],
   ['Write a qualified recommendation that does not claim more than the passage supports.',`${response} Present this as a proposal to test and evaluate, not as a guaranteed outcome. Other well-supported recommendations are also acceptable.`]
  ]
 ];
 return questions[level-1];
}
