const careers = [
  {
    _id: 1,
    title: 'Doctor',
    background: 'GCE AL (Sciences), Bacc A, International Baccaleaurate',
    image_url: 'assets/images/doctor.svg',
    concours: [
      'FMPS Douala',
      'FMBS Buea',
      'CUSS',
      'Universite des montagnes',
      'FHS Buea',
      'FHS Bamenda',
      'Faculte de medicine Kumbo',
      'Institut superieure des Techniques Medicales (Nkolondom)',
    ],
    institions: [
      'University of Yaounde',
      'University of Douala',
      'University of Dschang',
    ],
    description:
      'Doctors, also known as Physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. ',
  },
  {
    _id: 2,
    title: 'Mechanical Engineer',
    background: 'GCE AL (Sciences), Bacc A, International Baccaleaurate',
    concours: ['ENSP Yaounde', 'ENSP Bamenda', 'FGI', 'UDM', 'FET'],
    institions: [
      'University of Yaounde',
      'University of Douala',
      'University of Dschang',
    ],
    description:
      'Mechanical engineers develop, design, build, test, and inspect mechanical devices and systems, such as machines, tools, and engines. Since mechanical engineering is a very broad field, they work in a variety of different industries designing a wide range of products.',
  },
  {
    _id: 3,
    title: 'lawyer / Magistrate',
    background: 'GCE AL (Arts), Bacc Litteraire, International Baccaleaurate',
    concours: ['ENAM'],
    institions: [
      'University of Yaounde',
      'University of Douala',
      'University of Dschang',
      'university of Buea',
      'Universty of Bamenda',
    ],
    description:
      'Lawyers, also known as Attorneys, are certified professionals who advise and represent natural and juristic persons in legal matters. They counsel clients, perform legal research, prepare legal documents and represent clients in criminal and civil court proceedings.',
  },
  {
    _id: 4,
    title: 'Software Engineer',
    background:
      'GCE AL (Sciences / Arts), Any Bacc, International Baccaleaurate',
    institions: [
      'Seven Academy',
      'Digital College',
      'Universite de la cote',
      'University of Yaounde',
    ],
    description:
      'On the most basic level, software engineers write, debug, maintain, and test software that instructs a computer to accomplish certain tasks, such as saving information, performing calculations, etc. A software engineer will convert what needs to happen into one of many programming languages, the most common of which being Java, C++ and Python. ',
  },
  {
    _id: 5,
    title: 'Accountant',
    background:
      'GCE AL (Sciences / Arts), Any Bacc, International Baccaleaurate',
    institions: [
      'Seven Academy',
      'Digital College',
      'university of dreams',
      'University of Yaounde',
    ],
    description:
      'Accountants ensure all financial records and statements are in line with laws, regulations, and generally accepted accounting principles (GAAP). Accountants must also resolve any discrepancies or irregularities they find in records, statements, or documented transactions.',
  },

  {
    _id: 6,
    title: 'Agricultural engineer',
    background:
      'GCE AL (Sciences / Arts), Any Bacc, International Baccaleaurate',
    concours: ['FASA', 'ENEF'],
    institions: [
      'Digital College',
      'university of Ebolowa',
      'Faculte du bois du sud',
    ],
    description:
      'Agricultural engineers attempt to solve agricultural problems concerning power supplies, the efficiency of machinery, the use of structures and facilities, pollution and environmental issues, and the storage and processing of agricultural products.',
  },
  {
    _id: 7,
    title: 'Telecom engineer',
    background: 'GCE AL (Sciences / Arts), Bacc A, International Baccaleaurate',
    concours: ['SUPPTIC', 'Polytechnique Yaounde', 'Polytechnique Bamenda'],
    institions: [
      'University of Yaounde( ICT4dev)',
      'university of Ebolowa',
      'Faculte du bois du sud',
    ],
    description:
      'Telecommunication engineers understand how telecommunications systems – including voice, data, radio, fiber optics and waves – work and are equipped to handle disruptions of service and come up with solutions to deal with problems as they may arise. They also design and create telecommunications systems.',
  },
  {
    _id: 8,
    title: 'Journalist',
    background: 'GCE AL (Arts), Bacc C, International Baccaleaurate',
    institions: ['Esstic', 'university of Yaounde 2'],
    description:
      'Journalists research, write, edit, proofread and file news stories, features and articles. Their pieces are used on television and radio or within magazines, journals and newspapers, in print and online.',
  },

  {
    _id: 9,
    title: 'Translator',
    background: 'GCE AL (Arts), Bacc C, International Baccaleaurate',
    institions: ['Esstic', 'university of Yaounde 2'],
    description:
      'Translator Job Purpose Interprets written or spoken material into one or more other languages, ensures meaning and context are maintained, creates glossaries or term dictionaries, possesses knowledge of multiple languages, works with individual clients and corporations.',
  },
  {
    _id: 10,
    title: 'Civil Engineer',
    background: 'GCE AL (Science), Bacc A, International Baccaleaurate',
    institions: [
      'Travaux Publique',
      'Siantou Univeristy',
      'ENSP YaoundeY (3rd Year)',
    ],
    description:
      'Civil engineers create, improve and protect the environment in which we live. They plan, design and oversee construction and maintenance of building structures and infrastructure, such as roads, railways, airports, bridges, harbours, dams, irrigation projects, power plants, and water and sewerage systems.',
  },
  {
    _id: 11,
    title: 'Teacher',
    background:
      'GCE AL (Science/ Arts), any Bacc , International Baccaleaurate',
    concours: [
      'ENS Yaounde',
      'ENS Bertoua',
      'ENS Bambili',
      'ENSET Kumba',
      'ENSET Bambili',
      'ENS Douala',
      'all ensets and ENS',
    ],
    institions: ['All State universities'],
    description:
      'A Teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach students with engaging lesson plans.',
  },
  {
    _id: 12,
    title: 'Mining Engineer',
    background: 'GCE AL Science, Bacc  A, International Baccaleaurate',
    concours: ['EGEM', 'FMIP'],
    institions: [' All State universities'],
    description:
      'Mining engineers ensure that underground resources such as minerals, metals, oil and gas are extracted safely and efficiently. ... producing models or plans for possible mining sites. planning and implementing extraction systems. using specialist computer applications to maximise planning and production.',
  },
  {
    _id: 13,
    title: 'Police',
    background: 'GCE AL (Science/ Arts), Any Bacc, International Baccaleaurate',
    concours: ['EMIA', 'ENEF'],
    description:
      'In a nutshell, police officers maintain law and order, protect the general public, investigate crimes and prevent criminal activity from happening. ... You might be responsible for preventing heinous crimes and stopping dangerous criminal groups, such as organised crime syndicates.',
  },
  {
    _id: 14,
    title: 'Computer Network Specialist',
    background: 'GCE AL (Science) , Any Bacc, International Baccaleaurate',
    concours: ['COLTECH', 'ENEF', 'ENSP Bamenda'],
    institions: ['University of Yaounde', 'University of Douala'],
    description:
      'The job of IT Network Specialist was established for the purpose/s of planning, directing, designing, coordinating, and administering network systems and subsystems including all workstations; resolving network operational issues; maintaining computer and network hardware, software and the network; and providing ...',
  },
  {
    _id: 15,
    title: 'Military',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    concours: ['EMIA', 'ENEF', "Armee de l'air"],
    description:
      'Participate in, or support, military operations, such as combat or training operations, or humanitarian or disaster relief. Operate, maintain, and repair equipment. Perform technical and support activities. Supervise junior enlisted personnel.',
  },
  {
    _id: 16,
    title: 'Political Scientist',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    institions: ['University of Yaounde 2'],
    description:
      'Political scientists study the origin, development, and operation of political systems. They research political ideas and analyze governments, policies, political trends, and related issues',
  },
  {
    _id: 17,
    title: 'Pharmacist',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    institions: ['University of Yaounde 2'],
    description:
      'Prepares medications by reviewing and interpreting physician orders and detecting therapeutic incompatibilities. Dispenses medications by compounding, packaging, and labeling pharmaceuticals. Controls medications by monitoring drug therapies; advising interventions.',
  },
  {
    _id: 18,
    title: 'Digital Marketer',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    institions: ['University of Yaounde 2', 'Seven Academy', 'Digital College'],
    description:
      "As a digital marketer, you'll need to: create and upload copy and images for the organisation's website. write and dispatch email marketing campaigns. provide accurate reports and analysis to clients and company management to demonstrate effective return on investment (ROI)",
  },
  {
    _id: 19,
    title: 'Certified Hacker',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    institions: [
      'University of Yaounde( ICT4dev)',
      'Seven Academy',
      'Digital College',
    ],
    description:
      "Certified Ethical Hackers are cybersecurity experts who are employed to verify and improve the security of a company's computer system. Their job is to conduct advanced penetration tests on a company's system and identify any breaches or weaknesses in the security setup.",
  },
  {
    _id: 20,
    title: 'CyberSecurity Expert',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    institions: [
      'University of Yaounde( ICT4dev)',
      'Seven Academy',
      'Digital College',
    ],
    description:
      'Cyber Security Specialist is responsible for providing security during the development stages of software systems, networks and data centers. The professionals have to search for vulnerabilities and risks in hardware and software. ... The professionals will examine and evaluate security strategies and defenses.',
  },
  {
    _id: 21,
    title: 'Nurse',
    background: 'GCE AL  , Any Bacc, International Baccaleaurate',
    institions: [
      'University of Yaounde( ICT4dev)',
      'Seven Academy',
      'Digital College',
    ],
    description:
      'Nurses plan and provide medical and nursing care to patients in hospital, at home or in other settings who are suffering from chronic or acute physical or mental ill health. A caring and compassionate nature, and the ability to deal with emotionally charged and pressured situations are important traits of a nurse.',
  },
];

export default careers;
