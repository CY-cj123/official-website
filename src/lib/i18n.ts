export type Language = 'en' | 'zh-CN' | 'zh-TW' | 'fr' | 'ru';

export const translations = {
  en: {
    common: {
      company_name: "Changyuan Chengjian Municipal Construction Engineering Co., Ltd.",
      company_short: "Chengjian Municipal Construction Engineering",
      read_more: "Read More",
      view_all: "View All",
      search: "Search",
      location: "Location",
      date: "Date",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      standards: "Our Standards",
    },
    hero: {
      title: "Building the Future",
      titleSuffix: "with Integrity",
      subtitle: "A premier municipal construction provider dedicated to quality, safety, and sustainable development.",
      discover: "Discover our projects",
      stats: {
        sustainable: "Sustainable Legacies",
        future: "Future of Infrastructure",
        innovation: "Digital Innovation",
        standards: "Our Standards",
      },
      engineering_excellence: "Engineering Excellence"
    },
    intro: {
      text: "Changyuan Chengjian Municipal Construction Engineering Co., Ltd. is a municipal construction enterprise built on the foundation of integrity, dedicated to delivering high-standard infrastructure solutions.",
      about_btn: "About us",
      stats: {
        years: "Years of Excellence",
        areas: "Business Areas",
        qualifications: "Core Qualifications",
        safety: "Safety Record"
      }
    },
    project_showcase: {
      title: "Featured Projects",
      subtitle: "A selection of our signature projects showcasing excellence across diverse sectors.",
      view_all: "View more {category} projects",
      detail_title: "Project Detail",
      detail_placeholder: "This project represents a significant milestone in our commitment to infrastructure excellence. It incorporates sustainable design principles and advanced construction methodologies to deliver lasting value to the community.",
      location_label: "Location",
      completion_label: "Completion Date",
      location_value: "Changyuan, China",
      categories: {
        all: "All Projects",
        building: "Building Construction",
        municipal: "Municipal Public Works",
        me: "Electromechanical Engineering",
        steel: "Steel Structure Engineering",
        env: "Environmental Protection",
        lighting: "Urban & Road Lighting",
        foundation: "Ground Foundation Engineering"
      }
    },
    esg_section: {
      title: "Safety First, Sustainability Always",
      subtitle: "At Changyuan Chengjian Municipal Construction Engineering Co., Ltd., we believe that responsible construction is about more than just buildings; it's about protecting our people and preserving our planet for future generations.",
      safety_title: "Safety Standards",
      safety_desc: "Rigorous safety protocols and continuous training to ensure a zero-accident workplace.",
      env_title: "Environmental Stewardship",
      env_desc: "Commitment to green building practices and minimizing environmental impact.",
      report_btn: "Read Our ESG Report"
    },
    community_section: {
      tag: "Human Resources Strength",
      title: "Expertise in Action",
      desc: "With a team of skilled engineers and craftsmen, Changyuan Chengjian stands ready to deliver complex projects with precision and speed.",
      search_placeholder: "Search career opportunities",
      search_btn: "Search",
      careers_link: "See Our Qualifications"
    },
    about_page: {
      tag: "About Us",
      title: "Building a Better World Through Engineering Excellence",
      desc: "Founded in 2005, Changyuan Chengjian Municipal Construction Engineering Co., Ltd. is a comprehensive construction enterprise integrating building, municipal public works, electromechanical, steel structure, environmental protection, urban lighting, and foundation engineering. We always adhere to the principle of 'Reputation First, Quality First' and are committed to providing high-quality, safe, and sustainable solutions for urban construction.",
      profile_title: "Corporate Profile",
      profile_p1: "Changyuan Chengjian Municipal Construction Engineering Co., Ltd. was established on June 3, 2005. Its business scope includes construction engineering, municipal public works construction, electromechanical engineering, steel structure engineering, environmental protection engineering, urban and road lighting engineering, and foundation engineering. Since its establishment, the company has adhered to the purpose of serving users first, consciously abiding by contracts and valuing credit, combining corporate benefits with social benefits, and improving them year by year.",
      profile_p2: "Our company adheres to the management philosophy of 'Pooling Wisdom and Efforts, Creating the Future, Paying Attention to Details, and Pursuing Perfection' to continuously strengthen internal management. From beginning to end, we adhere to the principles of reputation first, quality first, safe production, and safe construction, establishing a good social image. The company strictly controls quality, seeks reputation, plans for development, has passed a series of quality system certifications, and is committed to creating a better future together!",
      stats: {
        employees: "Employees",
        projects: "Projects",
        awards: "Awards",
        years: "Years"
      },
      menu_items: {
        honors: "Enterprise Honors"
      },
      click_to_view: "Click to View",
      awards_label: "Awards",
      honors_title: "Enterprise Honors",
      honors_desc: "Recognition of our commitment to excellence and innovation in municipal engineering.",
      honors_list: [
        { title: "Outstanding Contribution Award for Municipal Construction in Beach Areas", issuer: "Changyuan Housing and Urban-Rural Development Bureau", date: "December 2021", image: "/images/real/award-contribution.webp" },
        { title: "Certificate of Honor (Anti-epidemic Donation)", issuer: "Changyuan Red Cross Society", date: "January 12, 2022", image: "/images/real/award-donation.webp" }
      ],
      qualifications_title: "Our Qualifications",
      certs: {
        license: { title: "Business License", desc: "Proof of legal business operation and compliance." },
        qualification: { title: "Qualification Certificate", desc: "Municipal Public Engineering Construction General Contracting." },
        safety: { title: "Safety Production License", desc: "Essential certification for safety compliance and site access." }
      }
    },
    services_page: {
      tag: "Our Expertise",
      title: "Comprehensive Engineering Solutions",
      desc: "We deliver end-to-end services across the entire infrastructure lifecycle, from planning and design to construction and maintenance.",
      view_projects: "Voir les projets",
      items: {
        building: { title: "Building Construction", desc: "High-quality residential and commercial building construction." },
        municipal: { title: "Municipal Public Works", desc: "Comprehensive municipal infrastructure solutions including roads and public facilities." },
        me: { title: "Electromechanical Engineering", desc: "Installation and maintenance of mechanical and electrical systems." },
        steel: { title: "Steel Structure Engineering", desc: "Specialized steel structure design and construction for durability and strength." },
        env: { title: "Environmental Protection", desc: "Sustainable solutions for water treatment, waste management, and pollution control." },
        lighting: { title: "Urban & Road Lighting", desc: "Intelligent lighting systems for urban landscapes and roadways." },
        foundation: { title: "Foundation Engineering", desc: "Solid foundation works including piling and excavation." }
      },
      key_capabilities: "Key Capabilities",
      general_desc_suffix: "We leverage cutting-edge technology and sustainable practices to deliver projects that stand the test of time. Our team of experts ensures every detail meets the highest standards of safety and quality.",
      capabilities_list: {
        building: ["High-rise commercial complexes", "Residential community planning", "Green building certification", "Structural retrofitting"],
        municipal: ["Urban road networks", "Public squares", "Drainage systems", "Traffic facilities"],
        me: ["Electrical power systems", "HVAC installation", "Industrial automation", "Building intelligence"],
        steel: ["Industrial workshops", "Steel bridges", "Large-span roofs", "High-rise steel structures"],
        env: ["Sewage treatment", "Waste management", "Air pollution control", "Ecological restoration"],
        lighting: ["Street lighting", "Landscape illumination", "Energy-saving systems", "Smart city lighting"],
        foundation: ["Deep excavation", "Pile foundations", "Soil improvement", "Retaining structures"]
      }
    },
    projects_page: {
      tag: "Our Portfolio",
      title: "Shaping the Future",
      desc: "Explore our portfolio of landmark projects that define skylines and connect communities.",
      view_project_hover: "View Project"
    },
    esg_page: {
      tag: "Sustainability",
      title: "ESG Commitment",
      desc: "We are dedicated to sustainable development, social responsibility, and transparent governance to build a better future for all.",
      env: {
        title: "Environmental Stewardship",
        desc: "We integrate green building practices into every project. From using recycled materials to implementing energy-efficient designs, we strive to minimize our carbon footprint.",
        list1: "Adoption of low-carbon construction materials.",
        list2: "Strict waste management and recycling protocols.",
        list3: "Protection of local biodiversity in project areas."
      },
      social: {
        title: "Social Responsibility",
        desc: "Our people are our greatest asset. We are committed to fostering a safe, inclusive, and growth-oriented workplace while giving back to the communities we serve.",
        list1: "Comprehensive safety training programs (Zero Harm policy).",
        list2: "Community engagement and local hiring initiatives.",
        list3: "Continuous professional development for all employees."
      },
      gov: {
        title: "Corporate Governance",
        desc: "Integrity is the foundation of our business. We uphold the highest ethical standards in all our operations, ensuring transparency and accountability.",
        ethics_title: "Ethics Compliance",
        ethics_desc: "Strict anti-corruption policies and regular audits.",
        risk_title: "Risk Management",
        risk_desc: "Proactive identification and mitigation of operational risks."
      }
    },
    footer: {
      company_desc: "Building the foundation for a sustainable future.",
      company_title: "Company",
      services_title: "Services",
      contact_title: "Contact",
      address: "No. 9, Lane 17, North Weihua Avenue, Puxi District, Changyuan, Henan, China",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      wechat_id: "WeChat ID: CJ_Group",
      scan_qr: "Scan QR code to follow"
    },
    contact: {
      get_in_touch: "Get in Touch",
      start_project: "Start Your Next Project",
      ready_text: "We are ready to bring your vision to life. Contact us to discuss your infrastructure needs or partnership opportunities.",
      info_title: "Contact Information",
      headquarters: "Headquarters",
      email: "Email",
      phone: "Phone",
      wechat: "WeChat",
      official_account: "CJ_Group",
      scan_to_follow: "Scan QR code to follow",
      send_message: "Send us a Message",
      form_desc: "Fill out the form below and we will get back to you shortly.",
      first_name: "First Name",
      last_name: "Last Name",
      subject: "Subject",
      message: "Message",
      send_btn: "Send Message",
      open_baidu: "Open in Baidu Map",
      open_gaode: "Open in Gaode Map"
    },
    cookie: {
      text: "We use cookies to ensure you get the best experience on our website. By continuing to visit this site you agree to our use of cookies.",
      accept: "Accept"
    },
    projects_data: {
      "101": { id: "101", title: "Guangzhou Tianjian Shangcheng", desc: "A landmark commercial complex covering 140,000 sqm." },
      "102": { id: "102", title: "Shenzhen Bay Innovation Center", desc: "High-tech research facility with LEED Gold certification." },
      "103": { id: "103", title: "City Library & Cultural Hub", desc: "Modern public space integrating learning and community." },
      "104": { id: "104", title: "Residential Tower Block A", desc: "Luxury residential complex with sustainable features." },
      "201": { id: "201", title: "Qianhai Coastal Road", desc: "Scenic coastal highway connecting key economic zones." },
      "202": { id: "202", title: "Shennan Boulevard Upgrade", desc: "Major urban artery renovation and widening project." },
      "203": { id: "203", title: "Urban Ring Road Phase 2", desc: "Traffic alleviation project for city center congestion." },
      "204": { id: "204", title: "Industrial Park Access Road", desc: "Heavy-duty logistics road infrastructure." },
      "301": { id: "301", title: "Nansha Bridge Connection", desc: "Key connector bridge spanning the Pearl River estuary." },
      "302": { id: "302", title: "City Cross-Over Viaduct", desc: "Urban viaduct reducing intersection bottlenecks." },
      "401": { id: "401", title: "Central Park Renovation", desc: "Revitalizing city green spaces for public recreation." },
      "402": { id: "402", title: "Riverfront Ecological Corridor", desc: "Sustainable riverbank protection and walking trails." },
      "501": { id: "501", title: "District Water Treatment Plant", desc: "Advanced filtration facility serving 500k residents." },
      "502": { id: "502", title: "Urban Drainage System Upgrade", desc: "Flood prevention infrastructure improvement." },
      "601": { id: "601", title: "G4 Expressway Expansion", desc: "Widening of the main national north-south artery." },
      "602": { id: "602", title: "Mountain Tunnel Connector", desc: "Complex tunnel engineering in mountainous terrain." },
      "801": { id: "801", title: "Central Urban Area Water Distribution System Renovation", desc: "Water supply engineering for Changyuan Central Urban Area Changshi Road (Central Ring Road - 300m East of Menggang Industrial Park).", location: "Changyuan Central Urban Area", date: "2024" },
      "802": { id: "802", title: "Rainwater and Sewage Confluence Pipeline Renovation", desc: "Rainwater and sewage diversion and new sewage pipeline project for Renmin Road, Kuangcheng Road and Other Eleven Roads in Changyuan City, including sewage network engineering and sewage pump station engineering.", location: "Within Changyuan City", date: "2021" },
      "803": { id: "803", title: "Planning Road and Resettlement Road Project (Section II)", desc: "Road construction and supporting rainwater and sewage network engineering for Changyuan City Planning Road and Resettlement Road.", location: "Within Changyuan City", date: "2018" },
      "804": { id: "804", title: "Urban Sewage Network Dredging Project", desc: "Dredging of Changyuan City urban sewage networks, including drainage, dilution, pumping, dredging, and sludge disposal.", location: "Within Changyuan City", date: "2019" },
      "805": { id: "805", title: "No. 2 Water Plant Backup Water Intake Project", desc: "Changyuan City No. 2 Water Plant Backup Water Intake Project, located at Guilin Avenue and Shanhai Avenue, content includes pipeline and pump house construction.", location: "Guilin Avenue and Shanhai Avenue, Changyuan City", date: "2016" },
      "b1": { id: "b1", title: "City Center Complex", desc: "A 50-story mixed-use skyscraper redefining the skyline." },
      "b2": { id: "b2", title: "Modern Residential Hub", desc: "Sustainable housing for 2,000+ families." },
      "b3": { id: "b3", title: "Tech Park Phase I", desc: "Innovation hub with LEED Platinum certification." },
      "b4": { id: "b4", title: "Civic Library", desc: "Public cultural space combining art and function." },
      "b5": { id: "b5", title: "Convention Center", desc: "Hosting global events with state-of-the-art facilities." },
      "b6": { id: "b6", title: "Heritage Renovation", desc: "Restoring historical landmarks with modern safety standards." },
      "r1": { id: "r1", title: "Coastal Highway", desc: "Connecting 3 major ports with efficient logistics." },
      "r2": { id: "r2", title: "Urban Ring Road", desc: "Reducing city traffic congestion by 40%." },
      "r3": { id: "r3", title: "Mountain Pass", desc: "Engineering marvel cutting travel time in half." },
      "r4": { id: "r4", title: "Airport Expressway", desc: "Direct link to the international terminal." },
      "r5": { id: "r5", title: "Smart Traffic System", desc: "AI-integrated road management infrastructure." },
      "r6": { id: "r6", title: "Green Boulevard", desc: "Eco-friendly urban road with extensive landscaping." },
      "br1": { id: "br1", title: "Bay Bridge", desc: "Longest sea-crossing bridge in the region." },
      "br2": { id: "br2", title: "River Viaduct", desc: "Essential link for cross-river commerce." },
      "br3": { id: "br3", title: "Pedestrian Skywalk", desc: "Connecting urban parks over busy intersections." },
      "br4": { id: "br4", title: "Cable-Stayed Icon", desc: "A landmark structure defining the city's image." },
      "br5": { id: "br5", title: "Railway Overpass", desc: "Supporting high-speed rail expansion." },
      "br6": { id: "br6", title: "Arch Bridge Reconstruction", desc: "Preserving history while ensuring structural integrity." },
      "l1": { id: "l1", title: "Central Park", desc: "100 acres of urban green space." },
      "l2": { id: "l2", title: "Riverfront Promenade", desc: "Revitalizing the city's relationship with water." },
      "l3": { id: "l3", title: "Botanical Gardens", desc: "Preserving biodiversity in the heart of the city." },
      "l4": { id: "l4", title: "Eco-Wetlands", desc: "Natural water filtration and wildlife habitat." },
      "l5": { id: "l5", title: "Community Plaza", desc: "A gathering place for cultural events." },
      "l6": { id: "l6", title: "Vertical Gardens", desc: "Integrating nature into high-density architecture." },
      "w1": { id: "w1", title: "Water Treatment Plant", desc: "Providing clean water for 1 million residents." },
      "w2": { id: "w2", title: "Flood Control Dam", desc: "Protecting the valley from seasonal flooding." },
      "w3": { id: "w3", title: "Sewage Network Upgrade", desc: "Modernizing underground infrastructure." },
      "w4": { id: "w4", title: "Reservoir Expansion", desc: "Securing water supply for dry seasons." },
      "w5": { id: "w5", title: "Urban Canal System", desc: "Restoring historic waterways for tourism." },
      "w6": { id: "w6", title: "Desalination Facility", desc: "Sustainable fresh water from the sea." },
      "h1": { id: "h1", title: "Interstate Connector", desc: "Boosting regional trade and transport." },
      "h2": { id: "h2", title: "Mountain Tunnel", desc: "Drilling through granite to shorten routes." },
      "h3": { id: "h3", title: "Expressway Widening", desc: "Expanding capacity to 8 lanes." },
      "h4": { id: "h4", title: "Logistics Hub Access", desc: "Dedicated heavy transport lanes." },
      "h5": { id: "h5", title: "Scenic Coastal Route", desc: "Tourism-focused highway development." },
      "h6": { id: "h6", title: "Sound Barrier Project", desc: "Reducing noise pollution for residential areas." }
    }
  },
  "zh-CN": {
    common: {
      company_name: "长垣市诚建市政建设工程有限公司",
      company_short: "诚建市政建设工程",
      read_more: "阅读更多",
      view_all: "查看全部",
      search: "搜索",
      location: "地点",
      date: "日期",
    },
    nav: {
      home: "首页",
      about: "关于我们",
      services: "业务领域",
      projects: "项目案例",
      contact: "联系我们",
      standards: "我们的标准",
    },
    hero: {
      title: "诚信为本，",
      titleSuffix: "建设未来",
      subtitle: "致力于质量、安全和可持续发展的优质市政建设服务商。",
      discover: "探索我们的项目",
      stats: {
        sustainable: "可持续传承",
        future: "未来基础设施",
        innovation: "数字创新",
        standards: "我们的标准",
      },
      engineering_excellence: "卓越工程"
    },
    intro: {
      text: "长垣市诚建市政建设工程有限公司是一家以诚信为基石的市政建设企业，致力于交付高标准的基础设施解决方案。",
      about_btn: "关于我们",
      stats: {
        years: "卓越历程",
        areas: "业务领域",
        qualifications: "企业资质",
        safety: "安全生产"
      }
    },
    project_showcase: {
      title: "精选工程案例",
      subtitle: "从众多卓越项目中精选的部分代表作，展现我们在各领域的专业实力。",
      view_all: "查看更多{category}案例",
      detail_title: "项目详情",
      detail_placeholder: "该项目代表了我们在基础设施卓越承诺中的一个重要里程碑。它融合了可持续设计原则和先进的施工方法，为社区提供持久的价值。",
      location_label: "地点",
      completion_label: "竣工日期",
      location_value: "中国长垣",
      categories: {
        all: "所有项目",
        building: "建筑工程施工",
        municipal: "市政公用工程施工",
        me: "机电工程",
        steel: "钢结构工程",
        env: "环保工程",
        lighting: "城市及道路照明工程",
        foundation: "地基基础工程"
      }
    },
    esg_section: {
      title: "安全至上，永续发展",
      subtitle: "在长垣诚建，我们相信负责任的建设不仅仅是建筑本身；更是保护我们的员工，为子孙后代保护我们的星球。",
      safety_title: "安全标准",
      safety_desc: "严格的安全协议和持续培训，确保零事故的工作场所。",
      env_title: "环境管理",
      env_desc: "致力于绿色建筑实践，最大限度地减少环境影响。",
      report_btn: "阅读我们的ESG报告"
    },
    community_section: {
      tag: "人力资源优势",
      title: "专业实践，卓越行动",
      desc: "长垣诚建拥有一支技术精湛的工程团队，随时准备以精准和速度交付复杂的工程项目。",
      search_placeholder: "搜索职业机会",
      search_btn: "搜索",
      careers_link: "查看我们的资质"
    },
    about_page: {
      tag: "关于我们",
      title: "通过卓越工程建设更美好的世界",
      desc: "长垣市诚建市政建设工程有限公司成立于2005年，是一家集建筑、市政公用、机电、钢结构、环保、城市照明及地基基础工程为一体的综合性施工企业。我们始终坚持“信誉至上，质量第一”的原则，致力于为城市建设提供优质、安全、可持续的解决方案。",
      profile_title: "公司简介",
      profile_p1: "长垣市诚建市政建设工程有限公司成立于2005年06月03日，经营范围包括建筑工程施工、市政公用工程施工、机电工程、钢结构工程、环保工程、城市及道路照明工程、地基基础工程。公司成立至今本着一切为用户服务的宗旨，自觉做到守合同，重信用，把企业效益和社会效益结合起来，并使之逐年提高。",
      profile_p2: "我公司坚持以“群策群力、开创未来、注重细节、追求完美”的管理理念不断加强内部管理。自始至终坚持信誉至上，质量第一，安全生产，安全施工的原则，树立了良好的社会形象。公司狠抓质量关，求信誉，谋发展，通过了一系列的质量体系认证，致力共创美好未来！",
      stats: {
        employees: "员工",
        projects: "项目",
        awards: "奖项",
        years: "年"
      },
      menu_items: {
        honors: "企业荣誉"
      },
      click_to_view: "点击查看",
      awards_label: "奖项",
      honors_title: "企业荣誉",
      honors_desc: "对我们在市政工程领域追求卓越和创新的认可。",
      honors_list: [
        { title: "滩区市政建设突出贡献奖", issuer: "长垣市住房和城乡建设局", date: "2021年12月", image: "/images/real/award-contribution.webp" },
        { title: "荣誉证书 (抗疫捐赠)", issuer: "长垣市红十字会", date: "2022年1月12日", image: "/images/real/award-donation.webp" }
      ],
      qualifications_title: "企业资质",
      certs: {
        license: { title: "营业执照", desc: "证明公司合法经营与合规性。" },
        qualification: { title: "建筑业企业资质证书", desc: "市政公用工程施工总承包资质。" },
        safety: { title: "安全生产许可证", desc: "进场施工的必备安全许可。" }
      }
    },
    services_page: {
      tag: "我们的专长",
      title: "综合工程解决方案",
      desc: "我们提供跨越整个基础设施生命周期的端到端服务，从规划设计到建设和维护。",
      view_projects: "查看项目",
      items: {
        building: { title: "建筑工程施工", desc: "高品质住宅和商业建筑施工。" },
        municipal: { title: "市政公用工程施工", desc: "包括道路和公共设施在内的综合市政基础设施解决方案。" },
        me: { title: "机电工程", desc: "机电系统的安装与维护。" },
        steel: { title: "钢结构工程", desc: "耐用且高强度的专业钢结构设计与施工。" },
        env: { title: "环保工程", desc: "水处理、废物管理和污染控制的可持续解决方案。" },
        lighting: { title: "城市及道路照明工程", desc: "城市景观和道路的智能照明系统。" },
        foundation: { title: "地基基础工程", desc: "包括桩基和开挖在内的坚实基础工程。" }
      },
      key_capabilities: "核心能力",
      general_desc_suffix: "我们利用尖端技术和可持续实践来交付经得起时间考验的项目。我们的专家团队确保每一个细节都符合最高的安全和质量标准。",
      capabilities_list: {
        building: ["高层商业综合体", "住宅社区规划", "绿色建筑认证", "结构改造"],
        municipal: ["城市路网", "公共广场", "排水系统", "交通设施"],
        me: ["电力系统", "暖通空调安装", "工业自动化", "楼宇智能化"],
        steel: ["工业厂房", "钢桥", "大跨度屋顶", "高层钢结构"],
        env: ["污水处理", "废物管理", "空气污染控制", "生态修复"],
        lighting: ["街道照明", "景观照明", "节能系统", "智慧城市照明"],
        foundation: ["深基坑开挖", "桩基础", "土壤改良", "支护结构"]
      }
    },
    projects_page: {
      tag: "我们的项目",
      title: "精品工程",
      desc: "",
      view_project_hover: "查看项目"
    },
    esg_page: {
      tag: "可持续发展",
      title: "ESG承诺",
      desc: "我们致力于可持续发展、社会责任和透明治理，为所有人建设更美好的未来。",
      env: {
        title: "环境管理",
        desc: "我们将绿色建筑实践融入每一个项目。从使用回收材料到实施节能设计，我们努力最大限度地减少碳足迹。",
        list1: "采用低碳建筑材料。",
        list2: "严格的废物管理和回收协议。",
        list3: "保护项目区域的当地生物多样性。"
      },
      social: {
        title: "社会责任",
        desc: "员工是我们最大的资产。我们致力于营造一个安全、包容和以增长为导向的工作场所，同时回馈我们服务的社区。",
        list1: "全面的安全培训计划（零伤害政策）。",
        list2: "社区参与和本地招聘计划。",
        list3: "全体员工的持续专业发展。"
      },
      gov: {
        title: "公司治理",
        desc: "诚信是我们业务的基础。我们在所有运营中坚持最高的道德标准，确保透明度和问责制。",
        ethics_title: "道德合规",
        ethics_desc: "严格的反腐败政策和定期审计。",
        risk_title: "风险管理",
        risk_desc: "主动识别和缓解运营风险。"
      }
    },
    footer: {
      company_desc: "为可持续的未来奠定基础。",
      company_title: "公司",
      services_title: "服务",
      contact_title: "联系方式",
      address: "中国河南省长垣市",
      rights: "版权所有。",
      privacy: "隐私政策",
      terms: "服务条款",
      wechat_id: "微信号: CJ_Group",
      scan_qr: "扫码关注"
    },
    contact: {
      get_in_touch: "保持联系",
      start_project: "开启您的下一个项目",
      ready_text: "我们要随时准备实现您的愿景。联系我们，探讨您的基础设施需求或合作机会。",
      info_title: "联系信息",
      headquarters: "总部",
      email: "电子邮箱",
      phone: "电话",
      wechat: "微信",
      official_account: "CJ_Group",
      scan_to_follow: "扫码关注",
      send_message: "给我们留言",
      form_desc: "填写下方表格，我们将尽快回复您。",
      first_name: "名",
      last_name: "姓",
      subject: "主题",
      message: "留言内容",
      send_btn: "发送信息",
      open_baidu: "在百度地图打开",
      open_gaode: "在高德地图打开"
    },
    cookie: {
      text: "我们使用 cookie 以确保您在我们的网站上获得最佳体验。继续访问本网站即表示您同意我们使用 cookie。",
      accept: "接受"
    },
    projects_data: {
      "101": { id: "101", title: "广州天健上城", desc: "占地14万平方米的地标性商业综合体。" },
      "102": { id: "102", title: "深圳湾创新中心", desc: "拥有LEED金级认证的高科技研发设施。" },
      "103": { id: "103", title: "城市图书馆与文化中心", desc: "集学习与社区功能于一体的现代公共空间。" },
      "104": { id: "104", title: "住宅塔楼A座", desc: "具有可持续特色的豪华住宅区。" },
      "201": { id: "201", title: "前海沿江道路", desc: "连接主要经济区的滨海景观公路。" },
      "202": { id: "202", title: "深南大道改造", desc: "主要城市主干道改造与扩宽工程。" },
      "203": { id: "203", title: "城市环路二期", desc: "缓解市中心拥堵的交通工程。" },
      "204": { id: "204", title: "工业园进场路", desc: "重型物流道路基础设施。" },
      "301": { id: "301", title: "南沙大桥连接线", desc: "跨越珠江口的关键连接桥梁。" },
      "302": { id: "302", title: "城市立交高架", desc: "减少路口瓶颈的城市高架桥。" },
      "401": { id: "401", title: "中央公园改造", desc: "振兴城市绿地以供公众休闲。" },
      "402": { id: "402", title: "滨河生态走廊", desc: "可持续的河岸保护与步行道。" },
      "501": { id: "501", title: "区域水处理厂", desc: "服务50万居民的先进过滤设施。" },
      "502": { id: "502", title: "城市排水系统升级", desc: "防洪基础设施改善工程。" },
      "601": { id: "601", title: "京港澳高速扩建", desc: "主要南北国家大动脉的扩宽工程。" },
      "602": { id: "602", title: "山区隧道连接线", desc: "山区复杂隧道工程。" },
      "801": { id: "801", title: "中心城区配水系统改扩建工程", desc: "长垣市中心城区长石路（中环路-孟岗镇工业园区东300米）给水工程。", location: "长垣市中心城区", date: "2024年" },
      "802": { id: "802", title: "雨污合流管道改造及污水管道新建项目", desc: "长垣市人民路、匡城路等十一条路雨污合流改道及污水管道新建项目，包含污水管网工程及污水泵站工程。", location: "长垣市境内", date: "2021年" },
      "803": { id: "803", title: "规划路和安置路道路工程二标段", desc: "长垣市规划路和安置路道路建设及雨污水管网配套工程。", location: "长垣市境内", date: "2018年" },
      "804": { id: "804", title: "城区污水管网清淤工程", desc: "长垣市城区污水管网清淤，包括排水、冲水稀释、抽污、疏通、清淤及淤泥外运等。", location: "长垣市境内", date: "2019年" },
      "805": { id: "805", title: "第二给水厂备用取水工程", desc: "长垣市第二给水厂备用取水工程，位于桂林大道与山海大道，工程内容包括管道及泵房建设。", location: "长垣市桂林大道，山海大道", date: "2016年" },
      "b1": { id: "b1", title: "城市中心综合体", desc: "重新定义天际线的50层混合用途摩天大楼。" },
      "b2": { id: "b2", title: "现代居住中心", desc: "为2000多个家庭提供的可持续住房。" },
      "b3": { id: "b3", title: "科技园一期", desc: "拥有LEED白金认证的创新中心。" },
      "b4": { id: "b4", title: "市民图书馆", desc: "结合艺术与功能的公共文化空间。" },
      "b5": { id: "b5", title: "会展中心", desc: "拥有最先进设施的全球活动举办地。" },
      "b6": { id: "b6", title: "历史建筑修缮", desc: "以现代安全标准修复历史地标。" },
      "r1": { id: "r1", title: "沿海公路", desc: "以高效物流连接3个主要港口。" },
      "r2": { id: "r2", title: "城市环路", desc: "减少40%的城市交通拥堵。" },
      "r3": { id: "r3", title: "山区通道", desc: "将通行时间缩短一半的工程奇迹。" },
      "r4": { id: "r4", title: "机场高速", desc: "直通国际航站楼的快速通道。" },
      "r5": { id: "r5", title: "智慧交通系统", desc: "AI集成的道路管理基础设施。" },
      "r6": { id: "r6", title: "绿色大道", desc: "拥有广泛绿化的生态友好型城市道路。" },
      "br1": { id: "br1", title: "海湾大桥", desc: "该地区最长的跨海大桥。" },
      "br2": { id: "br2", title: "跨河高架", desc: "跨河商业的重要纽带。" },
      "br3": { id: "br3", title: "人行天桥", desc: "连接繁忙路口上方的城市公园。" },
      "br4": { id: "br4", title: "地标斜拉桥", desc: "定义城市形象的地标性结构。" },
      "br5": { id: "br5", title: "铁路跨线桥", desc: "支持高速铁路扩建。" },
      "br6": { id: "br6", title: "拱桥重建", desc: "在确保结构完整性的同时保护历史。" },
      "l1": { id: "l1", title: "中央公园", desc: "100英亩的城市绿地。" },
      "l2": { id: "l2", title: "滨河步道", desc: "重塑城市与水的关系。" },
      "l3": { id: "l3", title: "植物园", desc: "在城市中心保护生物多样性。" },
      "l4": { id: "l4", title: "生态湿地", desc: "天然水过滤与野生动物栖息地。" },
      "l5": { id: "l5", title: "社区广场", desc: "文化活动的聚集地。" },
      "l6": { id: "l6", title: "垂直花园", desc: "将自然融入高密度建筑。" },
      "w1": { id: "w1", title: "水处理厂", desc: "为100万居民提供清洁用水。" },
      "w2": { id: "w2", title: "防洪大坝", desc: "保护山谷免受季节性洪水侵袭。" },
      "w3": { id: "w3", title: "污水管网升级", desc: "现代化地下基础设施。" },
      "w4": { id: "w4", title: "水库扩容", desc: "确保旱季供水。" },
      "w5": { id: "w5", title: "城市运河系统", desc: "修复历史水道以发展旅游业。" },
      "w6": { id: "w6", title: "海水淡化设施", desc: "来自海洋的可持续淡水。" },
      "h1": { id: "h1", title: "州际连接线", desc: "促进区域贸易与运输。" },
      "h2": { id: "h2", title: "山区隧道", desc: "钻穿花岗岩以缩短路线。" },
      "h3": { id: "h3", title: "高速扩宽", desc: "扩容至8车道。" },
      "h4": { id: "h4", title: "物流枢纽通道", desc: "专用重型运输车道。" },
      "h5": { id: "h5", title: "滨海景观路", desc: "以旅游为重点的高速公路开发。" },
      "h6": { id: "h6", title: "声屏障工程", desc: "减少居民区的噪音污染。" }
    }
  },
  "zh-TW": {
    common: {
      company_name: "長垣市誠建市政建設工程有限公司",
      company_short: "誠建市政建設工程",
      read_more: "閱讀更多",
      view_all: "查看全部",
      search: "搜索",
      location: "地點",
      date: "日期",
    },
    nav: {
      home: "首頁",
      about: "關於我們",
      services: "業務領域",
      projects: "項目案例",
      esg: "ESG",
      contact: "聯繫我們",
      standards: "我們的標準",
    },
    hero: {
      title: "誠信為本，",
      titleSuffix: "建設未來",
      subtitle: "致力於質量、安全和可持續發展的優質市政建設服務商。",
      discover: "探索我們的項目",
      stats: {
        sustainable: "可持續傳承",
        future: "未來基礎設施",
        innovation: "數字創新",
        standards: "我們的標準",
      },
      engineering_excellence: "卓越工程"
    },
    intro: {
      text: "長垣市誠建市政建設工程有限公司是一家以誠信為基石的市政建設企業，致力於交付高標準的基礎設施解決方案。",
      about_btn: "關於我們",
      stats: {
        years: "卓越歷程",
        areas: "業務領域",
        qualifications: "企業資質",
        safety: "安全生產"
      }
    },
    project_showcase: {
      title: "我們的項目",
      subtitle: "在各個工程領域交付卓越成果。",
      view_all: "查看所有{category}項目",
      detail_title: "項目詳情",
      detail_placeholder: "該項目代表了我們在基礎設施卓越承諾中的一個重要里程碑。它融合了可持續設計原則和先進的施工方法，為社區提供持久的價值。",
      location_label: "地點",
      completion_label: "竣工日期",
      location_value: "中國長垣",
      categories: {
        all: "所有項目",
        building: "建築工程施工",
        municipal: "市政公用工程施工",
        me: "機電工程",
        steel: "鋼結構工程",
        env: "環保工程",
        lighting: "城市及道路照明工程",
        foundation: "地基基礎工程"
      }
    },
    esg_section: {
      title: "安全至上，永續發展",
      subtitle: "在長垣誠建，我們相信負責任的建設不僅僅是建築本身；更是保護我們的員工，為子孫後代保護我們的星球。",
      safety_title: "安全標準",
      safety_desc: "嚴格的安全協議和持續培訓，確保零事故的工作場所。",
      env_title: "環境管理",
      env_desc: "致力於綠色建築實踐，最大限度地減少環境影響。",
      report_btn: "閱讀我們的ESG報告"
    },
    community_section: {
      tag: "人力資源優勢",
      title: "專業實踐，卓越行動",
      desc: "長垣誠建擁有一支技術精湛的工程團隊，隨時準備以精準和速度交付複雜的工程項目。",
      search_placeholder: "搜索職業機會",
      search_btn: "搜索",
      esg_link: "閱讀ESG報告",
      careers_link: "查看我們的資質"
    },
    about_page: {
      tag: "關於我們",
      title: "通過卓越工程建設更美好的世界",
      desc: "長垣市誠建市政建設工程有限公司成立於2005年，是一家集建築、市政公用、機電、鋼結構、環保、城市照明及地基基礎工程為一體的綜合性施工企業。我們始終堅持“信譽至上，質量第一”的原則，致力於為城市建設提供優質、安全、可持續的解決方案。",
      profile_title: "公司簡介",
      profile_p1: "長垣市誠建市政建設工程有限公司成立於2005年06月03日，經營範圍包括建築工程施工、市政公用工程施工、機電工程、鋼結構工程、環保工程、城市及道路照明工程、地基基礎工程。公司成立至今本著一切為用戶服務的宗旨，自覺做到守合同，重信用，把企業效益和社會效益結合起來，並使之逐年提高。",
      profile_p2: "我公司堅持以“群策群力、開創未來、注重細節、追求完美”的管理理念不斷加強內部管理。自始至終堅持信譽至上，質量第一，安全生產，安全施工的原則，樹立了良好的社會形象。公司狠抓質量關，求信誉，謀發展，通過了一系列的質量體系認證，致力共創美好未來！",
      stats: {
        employees: "員工",
        projects: "項目",
        awards: "獎項",
        years: "年"
      },
      menu_items: {
        honors: "企業榮譽"
      },
      click_to_view: "點擊查看",
      awards_label: "獎項",
      honors_title: "企業榮譽",
      honors_desc: "對我們在市政工程領域追求卓越和創新的認可。",
      honors_list: [
        { title: "灘區市政建設突出貢獻獎", issuer: "長垣市住房和城鄉建設局", date: "2021年12月", image: "/images/real/award-contribution.jpg" },
        { title: "榮譽證書 (抗疫捐贈)", issuer: "長垣市紅十字會", date: "2022年1月12日", image: "/images/real/award-donation.jpg" }
      ],
      qualifications_title: "企業資質",
      certs: {
        license: { title: "營業執照", desc: "證明公司合法經營與合規性。" },
        qualification: { title: "建築業企業資質證書", desc: "市政公用工程施工總承包資質。" },
        safety: { title: "安全生產許可證", desc: "進場施工的必備安全許可。" }
      }
    },
    services_page: {
      tag: "我們的專長",
      title: "綜合工程解決方案",
      desc: "我們提供跨越整個基礎設施生命週期的端到端服務，從規劃設計到建設和維護。",
      view_projects: "瀏覽項目",
      items: {
        building: { title: "建築工程施工", desc: "高品質住宅和商業建築施工。" },
        municipal: { title: "市政公用工程施工", desc: "包括道路和公共設施在內的綜合市政基礎設施解決方案。" },
        me: { title: "機電工程", desc: "機電系統的安裝與維護。" },
        steel: { title: "鋼結構工程", desc: "耐用且高強度的專業鋼結構設計與施工。" },
        env: { title: "環保工程", desc: "水處理、廢物管理和污染控制的可持續解決方案。" },
        lighting: { title: "城市及道路照明工程", desc: "城市景觀和道路的智能照明系統。" },
        foundation: { title: "地基基礎工程", desc: "包括樁基和開挖在內的堅實基礎工程。" }
      },
      key_capabilities: "核心能力",
      general_desc_suffix: "我們利用尖端技術和可持續實踐來交付經得起時間考驗的項目。我們的專家團隊確保每一個細節都符合最高的安全和質量標準。",
      capabilities_list: {
        building: ["高層商業綜合體", "住宅社區規劃", "綠色建築認證", "結構改造"],
        municipal: ["城市路網", "公共廣場", "排水系統", "交通設施"],
        me: ["電力系統", "暖通空調安裝", "工業自動化", "樓宇智能化"],
        steel: ["工業廠房", "鋼橋", "大跨度屋頂", "高層鋼結構"],
        env: ["污水處理", "廢物管理", "空氣污染控制", "生態修復"],
        lighting: ["街道照明", "景觀照明", "節能系統", "智慧城市照明"],
        foundation: ["深基坑開挖", "樁基礎", "土壤改良", "支護結構"]
      }
    },
    projects_page: {
      tag: "我們的作品",
      title: "塑造未來",
      desc: "探索我們要定義天際線並連接社區的標誌性項目組合。",
      view_project_hover: "查看項目"
    },
    esg_page: {
      tag: "可持續發展",
      title: "ESG承諾",
      desc: "我們致力於可持續發展、社會責任和透明治理，為所有人建設更美好的未來。",
      env: {
        title: "環境管理",
        desc: "我們將綠色建築實踐融入每一個項目。從使用回收材料到實施節能設計，我們努力最大限度地減少碳足跡。",
        list1: "採用低碳建築材料。",
        list2: "嚴格的廢物管理和回收協議。",
        list3: "保護項目區域的當地生物多樣性。"
      },
      social: {
        title: "社會責任",
        desc: "員工是我們最大的資產。我們致力於營造一個安全、包容和以增長為導向的工作場所，同時回饋我們服務的社區。",
        list1: "全面的安全培訓計劃（零傷害政策）。",
        list2: "社區參與和本地招聘計劃。",
        list3: "全體員工的持續專業發展。"
      },
      gov: {
        title: "公司治理",
        desc: "誠信是我們業務的基礎。我們在所有運營中堅持最高的道德標準，確保透明度和問責制。",
        ethics_title: "道德合規",
        ethics_desc: "嚴格的反腐敗政策和定期審計。",
        risk_title: "風險管理",
        risk_desc: "主動識別和緩解運營風險。"
      }
    },
    footer: {
      company_desc: "為可持續的未來奠定基礎。",
      company_title: "公司",
      services_title: "服務",
      contact_title: "聯繫方式",
      address: "中國河南省新鄉市長垣市蒲西區衛華大道北十七巷9號",
      rights: "版權所有。",
      privacy: "隱私政策",
      terms: "服務條款",
      wechat_id: "微信號: CJ_Group",
      scan_qr: "掃碼關注"
    },
    contact: {
      get_in_touch: "保持聯繫",
      start_project: "開啟您的下一個項目",
      ready_text: "我們隨時準備實現您的願景。聯繫我們，探討您的基礎設施需求或合作機會。",
      info_title: "聯繫信息",
      headquarters: "總部",
      email: "電子郵箱",
      phone: "電話",
      wechat: "微信",
      official_account: "CJ_Group",
      scan_to_follow: "掃碼關注",
      send_message: "給我們留言",
      form_desc: "填寫下方表格，我們將盡快回复您。",
      first_name: "名",
      last_name: "姓",
      subject: "主題",
      message: "留言內容",
      send_btn: "發送信息",
      open_baidu: "在百度地圖打開",
      open_gaode: "在高德地圖打開"
    },
    cookie: {
      text: "我們使用 cookie 以確保您在我們的網站上獲得最佳體驗。繼續訪問本網站即表示您同意我們使用 cookie。",
      accept: "接受"
    },
    projects_data: {
      "101": { id: "101", title: "廣州天健上城", desc: "佔地14萬平方米的地標性商業綜合體。" },
      "102": { id: "102", title: "深圳灣創新中心", desc: "擁有LEED金級認證的高科技研發設施。" },
      "103": { id: "103", title: "城市圖書館與文化中心", desc: "集學習與社區功能於一體的現代公共空間。" },
      "104": { id: "104", title: "住宅塔樓A座", desc: "具有可持續特色的豪華住宅區。" },
      "201": { id: "201", title: "前海沿江道路", desc: "連接主要經濟區的濱海景觀公路。" },
      "202": { id: "202", title: "深南大道改造", desc: "主要城市主幹道改造與擴寬工程。" },
      "203": { id: "203", title: "城市環路二期", desc: "緩解市中心擁堵的交通工程。" },
      "204": { id: "204", title: "工業園進場路", desc: "重型物流道路基礎設施。" },
      "301": { id: "301", title: "南沙大橋連接線", desc: "跨越珠江口的關鍵連接橋樑。" },
      "302": { id: "302", title: "城市立交高架", desc: "減少路口瓶頸的城市高架橋。" },
      "401": { id: "401", title: "中央公園改造", desc: "振興城市綠地以供公眾休閒。" },
      "402": { id: "402", title: "濱河生態走廊", desc: "可持續的河岸保護與步行道。" },
      "501": { id: "501", title: "區域水處理廠", desc: "服務50萬居民的先進過濾設施。" },
      "502": { id: "502", title: "城市排水系統升級", desc: "防洪基礎設施改善工程。" },
      "601": { id: "601", title: "京港澳高速擴建", desc: "主要南北國家大動脈的擴寬工程。" },
      "602": { id: "602", title: "山區隧道連接線", desc: "山區複雜隧道工程。" },
      "801": { id: "801", title: "中心城區配水系統改擴建工程", desc: "長垣市中心城區長石路（中環路-孟崗鎮工業園區東300米）給水工程。", location: "長垣市中心城區", date: "2024年" },
      "802": { id: "802", title: "雨污合流管道改造及污水管道新建項目", desc: "長垣市人民路、匡城路等十一條路雨污合流改道及污水管道新建項目，包含污水管網工程及污水泵站工程。", location: "長垣市境內", date: "2021年" },
      "803": { id: "803", title: "規劃路和安置路道路工程二標段", desc: "長垣市規劃路和安置路道路建設及雨污水管網配套工程。", location: "長垣市境內", date: "2018年" },
      "804": { id: "804", title: "城區污水管網清淤工程", desc: "長垣市城區污水管網清淤，包括排水、沖水稀釋、抽污、疏通、清淤及淤泥外運等。", location: "長垣市境內", date: "2019年" },
      "805": { id: "805", title: "第二給水廠備用取水工程", desc: "長垣市第二給水廠備用取水工程，位於桂林大道與山海大道，工程內容包括管道及泵房建設。", location: "長垣市桂林大道，山海大道", date: "2016年" },
      "b1": { id: "b1", title: "城市中心綜合體", desc: "重新定義天際線的50層混合用途摩天大樓。" },
      "b2": { id: "b2", title: "現代居住中心", desc: "為2000多個家庭提供的可持續住房。" },
      "b3": { id: "b3", title: "科技園一期", desc: "擁有LEED白金認證的創新中心。" },
      "b4": { id: "b4", title: "市民圖書館", desc: "結合藝術與功能的公共文化空間。" },
      "b5": { id: "b5", title: "會展中心", desc: "擁有最先進設施的全球活動舉辦地。" },
      "b6": { id: "b6", title: "歷史建築修繕", desc: "以現代安全標準修復歷史地標。" },
      "r1": { id: "r1", title: "沿海公路", desc: "以高效物流連接3個主要港口。" },
      "r2": { id: "r2", title: "城市環路", desc: "減少40%的城市交通擁堵。" },
      "r3": { id: "r3", title: "山區通道", desc: "將通行時間縮短一半的工程奇蹟。" },
      "r4": { id: "r4", title: "機場高速", desc: "直通國際航站樓的快速通道。" },
      "r5": { id: "r5", title: "智慧交通系統", desc: "AI集成的道路管理基礎設施。" },
      "r6": { id: "r6", title: "綠色大道", desc: "擁有廣泛綠化的生態友好型城市道路。" },
      "br1": { id: "br1", title: "海灣大橋", desc: "該地區最長的跨海大橋。" },
      "br2": { id: "br2", title: "跨河高架", desc: "跨河商業的重要紐帶。" },
      "br3": { id: "br3", title: "人行天橋", desc: "連接繁忙路口上方的城市公園。" },
      "br4": { id: "br4", title: "地標斜拉橋", desc: "定義城市形象的地標性結構。" },
      "br5": { id: "br5", title: "鐵路跨線橋", desc: "支持高速鐵路擴建。" },
      "br6": { id: "br6", title: "拱橋重建", desc: "在確保結構完整性的同時保護歷史。" },
      "l1": { id: "l1", title: "中央公園", desc: "100英畝的城市綠地。" },
      "l2": { id: "l2", title: "濱河步道", desc: "重塑城市與水的關係。" },
      "l3": { id: "l3", title: "植物園", desc: "在城市中心保護生物多樣性。" },
      "l4": { id: "l4", title: "生態濕地", desc: "天然水過濾與野生動物棲息地。" },
      "l5": { id: "l5", title: "社區廣場", desc: "文化活動的聚集地。" },
      "l6": { id: "l6", title: "垂直花園", desc: "將自然融入高密度建築。" },
      "w1": { id: "w1", title: "水處理廠", desc: "為100萬居民提供清潔用水。" },
      "w2": { id: "w2", title: "防洪大壩", desc: "保護山谷免受季節性洪水侵襲。" },
      "w3": { id: "w3", title: "污水管網升級", desc: "現代化地下基礎設施。" },
      "w4": { id: "w4", title: "水庫擴容", desc: "確保旱季供水。" },
      "w5": { id: "w5", title: "城市運河系統", desc: "修復歷史水道以發展旅遊業。" },
      "w6": { id: "w6", title: "海水淡化設施", desc: "來自海洋的可持續淡水。" },
      "h1": { id: "h1", title: "州際連接線", desc: "促進區域貿易與運輸。" },
      "h2": { id: "h2", title: "山區隧道", desc: "鑽穿花崗岩以縮短路線。" },
      "h3": { id: "h3", title: "高速擴寬", desc: "擴容至8車道。" },
      "h4": { id: "h4", title: "物流樞紐通道", desc: "專用重型運輸車道。" },
      "h5": { id: "h5", title: "濱海景觀路", desc: "以旅遊為重點的高速公路開發。" },
      "h6": { id: "h6", title: "聲屏障工程", desc: "減少居民區的噪音污染。" },

    }
  },
  fr: {
    common: {
      company_name: "Changyuan Chengjian Municipal Construction Engineering",
      company_short: "Chengjian Municipal Construction Engineering",
      read_more: "Lire la suite",
      view_all: "Voir tout",
      search: "Rechercher",
      location: "Emplacement",
      date: "Date",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      projects: "Projets",
      esg: "ESG",
      contact: "Contact",
      standards: "Nos normes",
    },
    hero: {
      title: "Bâtir l'avenir",
      titleSuffix: "avec intégrité",
      subtitle: "Un fournisseur de construction municipale de premier plan dédié à la qualité, la sécurité et le développement durable.",
      discover: "Découvrez nos projets",
      stats: {
        sustainable: "Héritage durable",
        future: "Avenir des infrastructures",
        innovation: "Innovation numérique",
        standards: "Nos normes",
      },
      engineering_excellence: "L'excellence en ingénierie"
    },
    intro: {
      text: "Changyuan Chengjian Municipal Construction Engineering Co., Ltd. est une entreprise de construction municipale fondée sur l'intégrité, dédiée à la livraison de solutions d'infrastructure de haut niveau.",
      about_btn: "À propos de nous",
      stats: {
        years: "Années d'excellence",
        areas: "Domaines d'activité",
        qualifications: "Qualifications clés",
        safety: "Sécurité"
      }
    },
    project_showcase: {
      title: "Nos Projets",
      subtitle: "Livrer l'excellence dans divers secteurs de l'ingénierie.",
      view_all: "Voir tous les projets {category}",
      detail_title: "Détail du projet",
      detail_placeholder: "Ce projet représente une étape importante dans notre engagement envers l'excellence des infrastructures. Il intègre des principes de conception durable et des méthodologies de construction avancées pour offrir une valeur durable à la communauté.",
      location_label: "Emplacement",
      completion_label: "Date d'achèvement",
      location_value: "Changyuan, Chine",
      categories: {
        all: "Tous les projets",
        building: "Construction de bâtiments",
        municipal: "Travaux publics municipaux",
        me: "Ingénierie électromécanique",
        steel: "Ingénierie des structures en acier",
        env: "Protection de l'environnement",
        lighting: "Éclairage urbain et routier",
        foundation: "Ingénierie de fondation"
      }
    },
    esg_section: {
      title: "La sécurité d'abord, la durabilité toujours",
      subtitle: "Chez Changyuan Chengjian, nous croyons que la construction responsable ne concerne pas seulement les bâtiments ; il s'agit de protéger nos employés et de préserver notre planète pour les générations futures.",
      safety_title: "Normes de sécurité",
      safety_desc: "Protocoles de sécurité rigoureux et formation continue pour assurer un lieu de travail sans accident.",
      env_title: "Gestion environnementale",
      env_desc: "Engagement envers les pratiques de construction écologique et la minimisation de l'impact environnemental.",
      report_btn: "Lire notre rapport ESG"
    },
    community_section: {
      tag: "Force des Ressources Humaines",
      title: "L'expertise en action",
      desc: "Avec une équipe d'ingénieurs et d'artisans qualifiés, Changyuan Chengjian est prêt à livrer des projets complexes avec précision et rapidité.",
      search_placeholder: "Rechercher des opportunités de carrière",
      search_btn: "Rechercher",
      esg_link: "Lire notre rapport ESG",
      careers_link: "Voir nos qualifications"
    },
    about_page: {
      tag: "À propos de nous",
      title: "Construire un monde meilleur grâce à l'excellence en ingénierie",
      desc: "Fondée en 2005, Changyuan Chengjian Municipal Construction Engineering Co., Ltd. est une entreprise de construction complète intégrant le bâtiment, les travaux publics municipaux, l'électromécanique, la structure en acier, la protection de l'environnement, l'éclairage urbain et les travaux de fondation. Nous adhérons toujours au principe de « Réputation d'abord, Qualité d'abord » et nous engageons à fournir des solutions de haute qualité, sûres et durables pour la construction urbaine.",
      profile_title: "Profil de l'entreprise",
      profile_p1: "Changyuan Chengjian Municipal Construction Engineering Co., Ltd. a été créée le 3 juin 2005. Son champ d'activité comprend la construction de bâtiments, la construction de travaux publics municipaux, l'ingénierie électromécanique, l'ingénierie des structures en acier, l'ingénierie de la protection de l'environnement, l'ingénierie de l'éclairage urbain et routier, et les travaux de fondation. Depuis sa création, l'entreprise adhère à l'objectif de servir les utilisateurs avant tout, en respectant consciemment les contrats et en valorisant le crédit, en combinant les avantages de l'entreprise avec les avantages sociaux, et en les améliorant d'année en année.",
      profile_p2: "Notre entreprise adhère à la philosophie de gestion de « Mettre en commun la sagesse et les efforts, Créer l'avenir, Prêter attention aux détails et Poursuivre la perfection » pour renforcer continuellement la gestion interne. Du début à la fin, nous adhérons aux principes de réputation d'abord, de qualité d'abord, de production sûre et de construction sûre, établissant une bonne image sociale. L'entreprise contrôle strictement la qualité, recherche la réputation, planifie le développement, a passé une série de certifications de système qualité et s'engage à créer un avenir meilleur ensemble !",
      stats: {
        employees: "Employés",
        projects: "Projets",
        awards: "Récompenses",
        years: "Années"
      },
      menu_items: {
        organization: "Organisation",
        honors: "Honneurs",
        history: "Histoire"
      },
      click_to_view: "Cliquez pour voir",
      structure: "Structure",
      departments: {
        general_manager: "Directeur Général",
        engineering: "Ingénierie",
        finance: "Finance",
        hr: "RH",
        safety: "Sécurité",
        marketing: "Marketing",
        dept_suffix: "Dép."
      },
      organization_title: "Structure organisationnelle",
      organization_desc: "Une structure de gestion claire et efficace garantit que nos projets sont livrés avec précision et responsabilité.",
      awards_label: "Récompenses",
      honors_title: "Honneurs de l'entreprise",
      honors_desc: "Reconnaissance de notre engagement envers l'excellence et l'innovation dans l'ingénierie municipale.",
      honors_items: {
        project: "Excellent Projet",
        association: "Association de Génie Municipal"
      },
      timeline: "Chronologie",
      history_title: "Histoire du développement",
      history_desc: "De nos humbles débuts à un leader de l'industrie, notre parcours est défini par une croissance et une adaptation continues.",
      history_items: [
         { year: "1998", title: "Établissement", desc: "Entreprise fondée à Changyuan." },
         { year: "2005", title: "Expansion", desc: "Opérations étendues au niveau provincial." },
         { year: "2012", title: "Jalon Clé", desc: "Achèvement du premier grand projet de pont." },
         { year: "2023", title: "Innovation", desc: "Lancement de l'initiative de construction numérique." }
      ],
      video_title: "Vidéo d'entreprise",
      video_desc: "Regardez comment nous donnons vie à notre vision grâce à l'ingénierie.",
      qualifications_title: "Nos Qualifications",
      certs: {
        license: { title: "Licence Commerciale", desc: "Preuve de l'exploitation légale de l'entreprise." },
        qualification: { title: "Certificat de Qualification", desc: "Entreprise générale de construction de travaux publics municipaux." },
        safety: { title: "Licence de Production de Sécurité", desc: "Certification essentielle pour la conformité et l'accès au site." }
      }
    },
    services_page: {
      tag: "Notre expertise",
      title: "Solutions d'ingénierie complètes",
      desc: "Nous fournissons des services de bout en bout tout au long du cycle de vie des infrastructures, de la planification et de la conception à la construction et à la maintenance.",
      view_projects: "Voir les projets",
      items: {
        building: { title: "Construction de bâtiments", desc: "Construction de bâtiments résidentiels et commerciaux de haute qualité." },
        municipal: { title: "Travaux publics municipaux", desc: "Solutions complètes d'infrastructures municipales, y compris les routes et les installations publiques." },
        me: { title: "Ingénierie électromécanique", desc: "Installation et maintenance de systèmes mécaniques et électriques." },
        steel: { title: "Ingénierie des structures en acier", desc: "Conception et construction de structures en acier spécialisées pour la durabilité et la résistance." },
        env: { title: "Protection de l'environnement", desc: "Solutions durables pour le traitement de l'eau, la gestion des déchets et le contrôle de la pollution." },
        lighting: { title: "Éclairage urbain et routier", desc: "Systèmes d'éclairage intelligents pour les paysages urbains et les routes." },
        foundation: { title: "Ingénierie de fondation", desc: "Travaux de fondation solides, y compris le battage de pieux et l'excavation." }
      },
      key_capabilities: "Capacités clés",
      general_desc_suffix: "Nous tirons parti des technologies de pointe et des pratiques durables pour livrer des projets qui résistent à l'épreuve du temps. Notre équipe d'experts veille à ce que chaque détail réponde aux normes de sécurité et de qualité les plus élevées.",
      capabilities_list: {
        building: ["Complexes commerciaux de grande hauteur", "Planification de communautés résidentielles", "Certification de bâtiment écologique", "Rénovation structurelle"],
        municipal: ["Réseaux routiers urbains", "Places publiques", "Systèmes de drainage", "Installations de circulation"],
        me: ["Systèmes d'alimentation électrique", "Installation CVC", "Automatisation industrielle", "Intelligence du bâtiment"],
        steel: ["Ateliers industriels", "Ponts en acier", "Toits à grande portée", "Structures en acier de grande hauteur"],
        env: ["Traitement des eaux usées", "Gestion des déchets", "Contrôle de la pollution de l'air", "Restauration écologique"],
        lighting: ["Éclairage public", "Éclairage paysager", "Systèmes d'économie d'énergie", "Éclairage intelligent de la ville"],
        foundation: ["Excavation profonde", "Fondations sur pieux", "Amélioration des sols", "Structures de soutènement"]
      }
    },
    projects_page: {
      tag: "Notre portefeuille",
      title: "Façonner l'avenir",
      desc: "Découvrez notre portefeuille de projets phares qui définissent les horizons et connectent les communautés.",
      view_project_hover: "Voir le projet"
    },
    esg_page: {
      tag: "Durabilité",
      title: "Engagement ESG",
      desc: "Nous sommes dédiés au développement durable, à la responsabilité sociale et à la gouvernance transparente pour construire un avenir meilleur pour tous.",
      env: {
        title: "Gestion environnementale",
        desc: "Nous intégrons des pratiques de construction écologique dans chaque projet. De l'utilisation de matériaux recyclés à la mise en œuvre de conceptions écoénergétiques, nous nous efforçons de minimiser notre empreinte carbone.",
        list1: "Adoption de matériaux de construction à faible teneur en carbone.",
        list2: "Protocoles stricts de gestion et de recyclage des déchets.",
        list3: "Protection de la biodiversité locale dans les zones de projet."
      },
      social: {
        title: "Responsabilité sociale",
        desc: "Nos employés sont notre plus grand atout. Nous nous engageons à favoriser un lieu de travail sûr, inclusif et axé sur la croissance tout en redonnant aux communautés que nous servons.",
        list1: "Programmes complets de formation à la sécurité (politique Zéro Harm).",
        list2: "Engagement communautaire et initiatives d'embauche locale.",
        list3: "Développement professionnel continu pour tous les employés."
      },
      gov: {
        title: "Gouvernance d'entreprise",
        desc: "L'intégrité est le fondement de notre entreprise. Nous respectons les normes éthiques les plus élevées dans toutes nos opérations, garantissant transparence et responsabilité.",
        ethics_title: "Conformité éthique",
        ethics_desc: "Politiques anti-corruption strictes et audits réguliers.",
        risk_title: "Gestion des risques",
        risk_desc: "Identification et atténuation proactives des risques opérationnels."
      }
    },
    footer: {
      company_desc: "Construire les fondations d'un avenir durable.",
      company_title: "Entreprise",
      services_title: "Services",
      contact_title: "Contact",
      address: "No. 9, Lane 17, North Weihua Avenue, Puxi District, Changyuan, Henan, Chine",
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      wechat_id: "ID WeChat: CJ_Group",
      scan_qr: "Scanner le code QR"
    },
    contact: {
      get_in_touch: "Prendre contact",
      start_project: "Commencez votre projet",
      ready_text: "Nous sommes prêts à donner vie à votre vision. Contactez-nous pour discuter de vos besoins en infrastructure.",
      info_title: "Informations de contact",
      headquarters: "Siège social",
      email: "Email",
      phone: "Téléphone",
      wechat: "WeChat",
      official_account: "CJ_Group",
      scan_to_follow: "Scanner pour suivre",
      send_message: "Envoyez-nous un message",
      form_desc: "Remplissez le formulaire ci-dessous et nous vous répondrons sous peu.",
      first_name: "Prénom",
      last_name: "Nom",
      subject: "Sujet",
      message: "Message",
      send_btn: "Envoyer",
      open_baidu: "Ouvrir dans Baidu Map",
      open_gaode: "Ouvrir dans Gaode Map"
    },
    cookie: {
      text: "Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.",
      accept: "Accepter"
    },
    projects_data: {
      "101": { id: "101", title: "Guangzhou Tianjian Shangcheng", desc: "Un complexe commercial emblématique couvrant 140 000 m²." },
      "102": { id: "102", title: "Centre d'Innovation de Shenzhen Bay", desc: "Installation de recherche high-tech certifiée LEED Or." },
      "103": { id: "103", title: "Bibliothèque et Centre Culturel", desc: "Espace public moderne intégrant l'apprentissage et la communauté." },
      "104": { id: "104", title: "Tour Résidentielle Bloc A", desc: "Complexe résidentiel de luxe avec des caractéristiques durables." },
      "201": { id: "201", title: "Route Côtière de Qianhai", desc: "Autoroute côtière panoramique reliant les zones économiques clés." },
      "202": { id: "202", title: "Rénovation du Boulevard Shennan", desc: "Projet majeur de rénovation et d'élargissement de l'artère urbaine." },
      "203": { id: "203", title: "Rocade Urbaine Phase 2", desc: "Projet d'atténuation du trafic pour la congestion du centre-ville." },
      "204": { id: "204", title: "Route d'Accès au Parc Industriel", desc: "Infrastructure routière logistique pour charges lourdes." },
      "301": { id: "301", title: "Connexion du Pont Nansha", desc: "Pont connecteur clé enjambant l'estuaire de la rivière des Perles." },
      "302": { id: "302", title: "Viaduc Urbain Transversal", desc: "Viaduc urbain réduisant les goulots d'étranglement aux intersections." },
      "401": { id: "401", title: "Rénovation de Central Park", desc: "Revitalisation des espaces verts urbains pour les loisirs publics." },
      "402": { id: "402", title: "Corridor Écologique Riverain", desc: "Protection durable des berges et sentiers pédestres." },
      "501": { id: "501", title: "Usine de Traitement des Eaux du District", desc: "Installation de filtration avancée desservant 500 000 résidents." },
      "502": { id: "502", title: "Mise à Niveau du Système de Drainage Urbain", desc: "Amélioration des infrastructures de prévention des inondations." },
      "601": { id: "601", title: "Expansion de l'Autoroute G4", desc: "Élargissement de la principale artère nationale nord-sud." },
      "602": { id: "602", title: "Connecteur de Tunnel de Montagne", desc: "Ingénierie de tunnel complexe en terrain montagneux." },
      "801": { id: "801", title: "Projet de rénovation et d'extension du système de distribution d'eau", desc: "Ingénierie de l'approvisionnement en eau pour la route Changshi du centre-ville de Changyuan (boulevard central - 300m à l'est du parc industriel de Menggang).", location: "Centre-ville de Changyuan", date: "2024" },
      "802": { id: "802", title: "Projet de rénovation des canalisations d'eaux pluviales et usées et de nouvelles canalisations d'eaux usées", desc: "Projet de déviation des eaux pluviales et usées et nouveau réseau d'égouts pour la route Renmin, la route Kuangcheng et onze autres routes de la ville de Changyuan, y compris l'ingénierie des réseaux et des stations de pompage.", location: "Dans la ville de Changyuan", date: "2021" },
      "803": { id: "803", title: "Projet routier de la route planifiée et de la route de réinstallation (Section II)", desc: "Construction de routes et ingénierie des réseaux d'eaux pluviales et usées pour la route planifiée et la route de réinstallation de la ville de Changyuan.", location: "Dans la ville de Changyuan", date: "2018" },
      "804": { id: "804", title: "Projet de dragage du réseau d'égouts urbain", desc: "Dragage des réseaux d'égouts urbains de la ville de Changyuan, y compris le drainage, la dilution, le pompage, le dragage et l'évacuation des boues.", location: "Dans la ville de Changyuan", date: "2019" },
      "805": { id: "805", title: "Projet de prise d'eau de secours de la deuxième usine d'eau", desc: "Projet de prise d'eau de secours de la deuxième usine d'eau de la ville de Changyuan, situé sur l'avenue Guilin et l'avenue Shanhai, comprenant la construction de canalisations et de stations de pompage.", location: "Avenue Guilin et Avenue Shanhai, Ville de Changyuan", date: "2016" },
      "b1": { id: "b1", title: "Complexe du Centre-Ville", desc: "Gratte-ciel polyvalent de 50 étages redéfinissant l'horizon." },
      "b2": { id: "b2", title: "Hub Résidentiel Moderne", desc: "Logement durable pour plus de 2 000 familles." },
      "b3": { id: "b3", title: "Tech Park Phase I", desc: "Hub d'innovation certifié LEED Platine." },
      "b4": { id: "b4", title: "Bibliothèque Civique", desc: "Espace culturel public alliant art et fonction." },
      "b5": { id: "b5", title: "Centre de Convention", desc: "Accueil d'événements mondiaux avec des installations de pointe." },
      "b6": { id: "b6", title: "Rénovation du Patrimoine", desc: "Restauration de monuments historiques avec des normes de sécurité modernes." },
      "r1": { id: "r1", title: "Autoroute Côtière", desc: "Relier 3 ports majeurs avec une logistique efficace." },
      "r2": { id: "r2", title: "Rocade Urbaine", desc: "Réduire la congestion du trafic urbain de 40%." },
      "r3": { id: "r3", title: "Col de Montagne", desc: "Merveille d'ingénierie réduisant le temps de trajet de moitié." },
      "r4": { id: "r4", title: "Autoroute de l'Aéroport", desc: "Lien direct vers le terminal international." },
      "r5": { id: "r5", title: "Système de Trafic Intelligent", desc: "Infrastructure de gestion routière intégrée à l'IA." },
      "r6": { id: "r6", title: "Boulevard Vert", desc: "Route urbaine écologique avec un aménagement paysager étendu." },
      "br1": { id: "br1", title: "Pont de la Baie", desc: "Le plus long pont maritime de la région." },
      "br2": { id: "br2", title: "Viaduc Fluvial", desc: "Lien essentiel pour le commerce transfluvial." },
      "br3": { id: "br3", title: "Passerelle Piétonne", desc: "Relier les parcs urbains au-dessus des intersections fréquentées." },
      "br4": { id: "br4", title: "Icône à Haubans", desc: "Une structure emblématique définissant l'image de la ville." },
      "br5": { id: "br5", title: "Passage Supérieur Ferroviaire", desc: "Soutenir l'expansion du train à grande vitesse." },
      "br6": { id: "br6", title: "Reconstruction de Pont en Arc", desc: "Préserver l'histoire tout en assurant l'intégrité structurelle." },
      "l1": { id: "l1", title: "Central Park", desc: "100 acres d'espace vert urbain." },
      "l2": { id: "l2", title: "Promenade Riveraine", desc: "Revitaliser la relation de la ville avec l'eau." },
      "l3": { id: "l3", title: "Jardins Botaniques", desc: "Préserver la biodiversité au cœur de la ville." },
      "l4": { id: "l4", title: "Éco-Zones Humides", desc: "Filtration naturelle de l'eau et habitat faunique." },
      "l5": { id: "l5", title: "Place Communautaire", desc: "Un lieu de rassemblement pour les événements culturels." },
      "l6": { id: "l6", title: "Jardins Verticaux", desc: "Intégrer la nature dans l'architecture à haute densité." },
      "w1": { id: "w1", title: "Usine de Traitement de l'Eau", desc: "Fournir de l'eau potable à 1 million de résidents." },
      "w2": { id: "w2", title: "Barrage de Contrôle des Inondations", desc: "Protéger la vallée des inondations saisonnières." },
      "w3": { id: "w3", title: "Mise à Niveau du Réseau d'Égouts", desc: "Modernisation des infrastructures souterraines." },
      "w4": { id: "w4", title: "Expansion du Réservoir", desc: "Sécuriser l'approvisionnement en eau pour les saisons sèches." },
      "w5": { id: "w5", title: "Système de Canal Urbain", desc: "Restauration des voies navigables historiques pour le tourisme." },
      "w6": { id: "w6", title: "Installation de Dessalement", desc: "Eau douce durable issue de la mer." },
      "h1": { id: "h1", title: "Connecteur Interétatique", desc: "Stimuler le commerce et le transport régionaux." },
      "h2": { id: "h2", title: "Tunnel de Montagne", desc: "Percer le granit pour raccourcir les itinéraires." },
      "h3": { id: "h3", title: "Élargissement de l'Autoroute", desc: "Extension de la capacité à 8 voies." },
      "h4": { id: "h4", title: "Accès au Hub Logistique", desc: "Voies dédiées au transport lourd." },
      "h5": { id: "h5", title: "Route Côtière Panoramique", desc: "Développement autoroutier axé sur le tourisme." },
      "h6": { id: "h6", title: "Projet de Mur Anti-Bruit", desc: "Réduire la pollution sonore pour les zones résidentielles." }
    }
  },
  ru: {
    common: {
      company_name: "Changyuan Chengjian Municipal Construction Engineering",
      company_short: "Chengjian Municipal Construction Engineering",
      read_more: "Читать далее",
      view_all: "Смотреть все",
      search: "Поиск",
      location: "Местоположение",
      date: "Дата",
    },
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      projects: "Проекты",
      contact: "Контакты",
      standards: "Наши стандарты",
    },
    hero: {
      title: "Строим будущее",
      titleSuffix: "с честностью",
      subtitle: "Ведущий поставщик муниципальных строительных услуг, ориентированный на качество, безопасность и устойчивое развитие.",
      discover: "Наши проекты",
      stats: {
        sustainable: "Устойчивое наследие",
        future: "Будущее инфраструктуры",
        innovation: "Цифровые инновации",
        standards: "Наши стандарты",
      },
      engineering_excellence: "Инженерное совершенство"
    },
    intro: {
      text: "Changyuan Chengjian Municipal Construction Engineering Co., Ltd. — это муниципальное строительное предприятие, основанное на честности и стремящееся предоставлять высококачественные инфраструктурные решения.",
      about_btn: "О нас",
      stats: {
        years: "Лет опыта",
        areas: "Сферы деятельности",
        qualifications: "Квалификации",
        safety: "Безопасность"
      }
    },
    project_showcase: {
      title: "Наши проекты",
      subtitle: "Превосходство в различных инженерных секторах.",
      view_all: "Смотреть все проекты {category}",
      detail_title: "Детали проекта",
      detail_placeholder: "Этот проект представляет собой важную веху в нашем стремлении к совершенству инфраструктуры. Он включает в себя принципы устойчивого проектирования и передовые методологии строительства, чтобы обеспечить долгосрочную ценность для сообщества.",
      location_label: "Местоположение",
      completion_label: "Дата завершения",
      location_value: "Чанъюань, Китай",
      categories: {
        all: "Все проекты",
        building: "Строительство зданий",
        road: "Дорожное строительство",
        bridge: "Мостостроение",
        landscape: "Ландшафтная инженерия",
        water: "Гидротехнические работы",
        highway: "Строительство шоссе"
      }
    },
    esg_section: {
      title: "Безопасность прежде всего, устойчивость всегда",
      subtitle: "В Changyuan Chengjian мы верим, что ответственное строительство — это не только здания; это защита наших людей и сохранение нашей планеты для будущих поколений.",
      safety_title: "Стандарты безопасности",
      safety_desc: "Строгие протоколы безопасности и постоянное обучение для обеспечения рабочего места без несчастных случаев.",
      env_title: "Экологическая ответственность",
      env_desc: "Приверженность практике зеленого строительства и минимизации воздействия на окружающую среду.",
      report_btn: "Читать отчет ESG"
    },
    community_section: {
      tag: "Кадровый потенциал",
      title: "Экспертиза в действии",
      desc: "С командой квалифицированных инженеров и мастеров, Changyuan Chengjian готов реализовать сложные проекты с точностью и скоростью.",
      search_placeholder: "Поиск карьерных возможностей",
      search_btn: "Поиск",
      careers_link: "Смотреть наши квалификации"
    },
    about_page: {
      tag: "О нас",
      title: "Строим лучший мир через инженерное совершенство",
      desc: "Основанная в 2005 году, компания Changyuan Chengjian Municipal Construction Engineering Co., Ltd. является комплексным строительным предприятием, объединяющим строительство зданий, муниципальные общественные работы, электромеханику, стальные конструкции, охрану окружающей среды, городское освещение и фундаментные работы. Мы всегда придерживаемся принципа «Репутация прежде всего, Качество прежде всего» и стремимся предоставлять высококачественные, безопасные и устойчивые решения для городского строительства.",
      profile_title: "Профиль компании",
      profile_p1: "Компания Changyuan Chengjian Municipal Construction Engineering Co., Ltd. была создана 3 июня 2005 года. Сфера деятельности включает строительство зданий, строительство муниципальных общественных работ, электромеханическую инженерию, инженерию стальных конструкций, инженерию охраны окружающей среды, инженерию городского и дорожного освещения, а также фундаментные работы. С момента своего основания компания придерживается цели служения пользователям, сознательно соблюдая контракты и ценя кредит, сочетая выгоды предприятия с социальными выгодами и улучшая их из года в год.",
      profile_p2: "Наша компания придерживается философии управления «Объединение мудрости и усилий, Создание будущего, Внимание к деталям и Стремление к совершенству» для постоянного укрепления внутреннего управления. От начала и до конца мы придерживаемся принципов репутации прежде всего, качества прежде всего, безопасного производства и безопасного строительства, создавая хороший социальный имидж. Компания строго контролирует качество, стремится к репутации, планирует развитие, прошла серию сертификаций системы качества и стремится создать лучшее будущее вместе!",
      stats: {
        employees: "Сотрудников",
        projects: "Проектов",
        awards: "Наград",
        years: "Лет"
      },
      menu_items: {
        organization: "Организация",
        honors: "Награды",
        history: "История"
      },
      click_to_view: "Нажмите для просмотра",
      structure: "Структура",
      departments: {
        general_manager: "Генеральный директор",
        engineering: "Инженерный",
        finance: "Финансовый",
        hr: "HR",
        safety: "Безопасность",
        marketing: "Маркетинг",
        dept_suffix: "Отдел"
      },
      organization_title: "Организационная структура",
      organization_desc: "Четкая и эффективная структура управления гарантирует, что наши проекты реализуются с точностью и ответственностью.",
      awards_label: "Награды",
      honors_title: "Награды предприятия",
      honors_desc: "Признание нашей приверженности к совершенству и инновациям в муниципальном строительстве.",
      honors_items: {
        project: "Отличный проект",
        association: "Ассоциация муниципального строительства"
      },
      timeline: "Хронология",
      history_title: "История развития",
      history_desc: "От скромных начинаний до лидера отрасли, наш путь определяется постоянным ростом и адаптацией.",
      history_items: [
         { year: "1998", title: "Основание", desc: "Компания основана в Чанъюане." },
         { year: "2005", title: "Расширение", desc: "Расширение операций на провинциальный уровень." },
         { year: "2012", title: "Ключевая веха", desc: "Завершен первый крупный мостовой проект." },
         { year: "2023", title: "Инновации", desc: "Запущена инициатива цифрового строительства." }
      ],
      video_title: "Корпоративное видео",
      video_desc: "Посмотрите, как мы воплощаем наше видение в жизнь с помощью инженерии.",
      qualifications_title: "Наши квалификации",
      certs: {
        license: { title: "Бизнес-лицензия", desc: "Подтверждение законной деятельности компании." },
        qualification: { title: "Сертификат квалификации", desc: "Генеральный подряд на строительство муниципальных общественных работ." },
        safety: { title: "Лицензия на безопасность производства", desc: "Необходима для соблюдения техники безопасности и доступа на объекты." }
      }
    },
    services_page: {
      tag: "Наша экспертиза",
      title: "Комплексные инженерные решения",
      desc: "Мы предоставляем полный спектр услуг на протяжении всего жизненного цикла инфраструктуры, от планирования и проектирования до строительства и обслуживания.",
      view_projects: "Смотреть проекты",
      items: {
        building: { title: "Строительство зданий", desc: "Строительство высококачественных жилых и коммерческих зданий." },
        municipal: { title: "Муниципальные общественные работы", desc: "Комплексные решения муниципальной инфраструктуры, включая дороги и общественные объекты." },
        me: { title: "Электромеханическая инженерия", desc: "Монтаж и обслуживание механических и электрических систем." },
        steel: { title: "Инженерия стальных конструкций", desc: "Проектирование и строительство специализированных стальных конструкций для долговечности и прочности." },
        env: { title: "Охрана окружающей среды", desc: "Устойчивые решения для очистки воды, управления отходами и контроля загрязнения." },
        lighting: { title: "Городское и дорожное освещение", desc: "Интеллектуальные системы освещения для городских ландшафтов и дорог." },
        foundation: { title: "Фундаментная инженерия", desc: "Надежные фундаментные работы, включая забивку свай и земляные работы." }
      },
      key_capabilities: "Ключевые возможности",
      general_desc_suffix: "Мы используем передовые технологии и устойчивые методы для реализации проектов, которые выдерживают испытание временем. Наша команда экспертов гарантирует, что каждая деталь соответствует самым высоким стандартам безопасности и качества.",
      capabilities_list: {
        building: ["Высотные коммерческие комплексы", "Планирование жилых сообществ", "Сертификация зеленого строительства", "Структурная модернизация"],
        municipal: ["Городские дорожные сети", "Общественные площади", "Дренажные системы", "Транспортные сооружения"],
        me: ["Системы электроснабжения", "Монтаж ОВК", "Промышленная автоматизация", "Интеллектуальные здания"],
        steel: ["Промышленные цеха", "Стальные мосты", "Большепролетные крыши", "Высотные стальные конструкции"],
        env: ["Очистка сточных вод", "Управление отходами", "Контроль загрязнения воздуха", "Экологическое восстановление"],
        lighting: ["Уличное освещение", "Ландшафтное освещение", "Энергосберегающие системы", "Умное городское освещение"],
        foundation: ["Глубокие земляные работы", "Свайные фундаменты", "Улучшение грунта", "Подпорные конструкции"]
      }
    },
    projects_page: {
      tag: "Наше портфолио",
      title: "Формируя будущее",
      desc: "Изучите наше портфолио знаковых проектов, которые определяют горизонты и соединяют сообщества.",
      view_project_hover: "Смотреть проект"
    },
    esg_page: {
      tag: "Устойчивость",
      title: "Обязательства ESG",
      desc: "Мы привержены устойчивому развитию, социальной ответственности и прозрачному управлению для построения лучшего будущего для всех.",
      env: {
        title: "Экологическая ответственность",
        desc: "Мы внедряем практики зеленого строительства в каждый проект. От использования переработанных материалов до внедрения энергоэффективных проектов, мы стремимся минимизировать наш углеродный след.",
        list1: "Использование низкоуглеродных строительных материалов.",
        list2: "Строгие протоколы управления отходами и переработки.",
        list3: "Защита местного биоразнообразия в районах проектов."
      },
      social: {
        title: "Социальная ответственность",
        desc: "Наши люди — наш главный актив. Мы стремимся создать безопасное, инклюзивное и ориентированное на рост рабочее место, одновременно помогая сообществам, которым мы служим.",
        list1: "Комплексные программы обучения безопасности (политика Zero Harm).",
        list2: "Взаимодействие с сообществом и инициативы по найму местных жителей.",
        list3: "Постоянное профессиональное развитие для всех сотрудников."
      },
      gov: {
        title: "Корпоративное управление",
        desc: "Честность — основа нашего бизнеса. Мы придерживаемся самых высоких этических стандартов во всех наших операциях, обеспечивая прозрачность и подотчетность.",
        ethics_title: "Этическое соответствие",
        ethics_desc: "Строгие антикоррупционные политики и регулярные аудиты.",
        risk_title: "Управление рисками",
        risk_desc: "Проактивное выявление и снижение операционных рисков."
      }
    },
    footer: {
      company_desc: "Создание фундамента для устойчивого будущего.",
      company_title: "Компания",
      services_title: "Услуги",
      contact_title: "Контакты",
      address: "No. 9, Lane 17, North Weihua Avenue, Puxi District, Changyuan, Henan, China",
      rights: "Все права защищены.",
      privacy: "Конфиденциальность",
      terms: "Условия использования",
      wechat_id: "WeChat ID: CJ_Group",
      scan_qr: "Сканируйте QR-код"
    },
    contact: {
      get_in_touch: "Связаться с нами",
      start_project: "Начать проект",
      ready_text: "Мы готовы воплотить ваше видение в жизнь. Свяжитесь с нами, чтобы обсудить ваши потребности в инфраструктуре.",
      info_title: "Контактная информация",
      headquarters: "Штаб-квартира",
      email: "Email",
      phone: "Телефон",
      wechat: "WeChat",
      official_account: "CJ_Group",
      scan_to_follow: "Сканируйте для подписки",
      send_message: "Отправить сообщение",
      form_desc: "Заполните форму ниже, и мы свяжемся с вами в ближайшее время.",
      first_name: "Имя",
      last_name: "Фамилия",
      subject: "Тема",
      message: "Сообщение",
      send_btn: "Отправить",
      open_baidu: "Открыть в Baidu Map",
      open_gaode: "Открыть в Gaode Map"
    },
    cookie: {
      text: "Мы используем файлы cookie, чтобы обеспечить вам лучший опыт на нашем сайте. Продолжая посещать этот сайт, вы соглашаетесь на использование файлов cookie.",
      accept: "Принять"
    },
    projects_data: {
      "101": { id: "101", title: "Guangzhou Tianjian Shangcheng", desc: "Знаковый коммерческий комплекс площадью 140 000 кв. м." },
      "102": { id: "102", title: "Инновационный центр Шэньчжэнь Бэй", desc: "Высокотехнологичный исследовательский центр с сертификатом LEED Gold." },
      "103": { id: "103", title: "Городская библиотека и культурный центр", desc: "Современное общественное пространство, объединяющее обучение и сообщество." },
      "104": { id: "104", title: "Жилая башня Блок А", desc: "Элитный жилой комплекс с устойчивыми характеристиками." },
      "201": { id: "201", title: "Прибрежное шоссе Цяньхай", desc: "Живописное прибрежное шоссе, соединяющее ключевые экономические зоны." },
      "202": { id: "202", title: "Модернизация бульвара Шэньнань", desc: "Крупный проект реконструкции и расширения городской артерии." },
      "203": { id: "203", title: "Вторая очередь городской кольцевой дороги", desc: "Проект по снижению транспортной нагрузки в центре города." },
      "204": { id: "204", title: "Подъездная дорога к индустриальному парку", desc: "Инфраструктура для тяжелой логистики." },
      "301": { id: "301", title: "Соединение моста Наньша", desc: "Ключевой соединительный мост через устье Жемчужной реки." },
      "302": { id: "302", title: "Городской виадук", desc: "Городской виадук, уменьшающий заторы на перекрестках." },
      "401": { id: "401", title: "Реновация Центрального парка", desc: "Оживление городских зеленых зон для отдыха горожан." },
      "402": { id: "402", title: "Прибрежный экологический коридор", desc: "Устойчивая защита берегов и пешеходные тропы." },
      "501": { id: "501", title: "Районная водоочистная станция", desc: "Современная фильтрационная установка, обслуживающая 500 000 жителей." },
      "502": { id: "502", title: "Модернизация городской дренажной системы", desc: "Улучшение инфраструктуры предотвращения наводнений." },
      "601": { id: "601", title: "Расширение скоростной автомагистрали G4", desc: "Расширение главной национальной магистрали север-юг." },
      "602": { id: "602", title: "Соединительный горный туннель", desc: "Сложное туннельное строительство в горной местности." },
      "801": { id: "801", title: "Проект реконструкции и расширения системы водоснабжения", desc: "Работы по водоснабжению на дороге Чанши (Центральная кольцевая дорога - 300 м к востоку от промышленного парка Мэнган) в центральном районе города Чанъюань.", location: "Центральный район города Чанъюань", date: "2024" },
      "802": { id: "802", title: "Проект реконструкции трубопроводов ливневой и бытовой канализации и строительства новых канализационных трубопроводов", desc: "Проект отвода ливневых и сточных вод и новой канализации для улицы Жэньминь, улицы Куанчэн и других одиннадцати дорог города Чанъюань, включая инженерные сети и насосные станции.", location: "В пределах города Чанъюань", date: "2021" },
      "803": { id: "803", title: "Проект планируемой дороги и дороги для переселения (Участок II)", desc: "Строительство дорог и инженерных сетей ливневой и бытовой канализации для планируемой дороги и дороги для переселения города Чанъюань.", location: "В пределах города Чанъюань", date: "2018" },
      "804": { id: "804", title: "Проект очистки городской канализационной сети", desc: "Очистка городских канализационных сетей города Чанъюань, включая дренаж, разбавление, откачку, дноуглубление и вывоз ила.", location: "В пределах города Чанъюань", date: "2019" },
      "805": { id: "805", title: "Проект резервного водозабора Второй водопроводной станции", desc: "Проект резервного водозабора Второй водопроводной станции города Чанъюань, расположен на проспекте Гуйлинь и проспекте Шаньхай, включает строительство трубопроводов и насосных станций.", location: "Проспект Гуйлинь и проспект Шаньхай, город Чанъюань", date: "2016" },
      "b1": { id: "b1", title: "Комплекс городского центра", desc: "50-этажный многофункциональный небоскреб, меняющий горизонт." },
      "b2": { id: "b2", title: "Современный жилой хаб", desc: "Устойчивое жилье для более чем 2 000 семей." },
      "b3": { id: "b3", title: "Технопарк Фаза I", desc: "Инновационный хаб с сертификатом LEED Platinum." },
      "b4": { id: "b4", title: "Городская библиотека", desc: "Общественное культурное пространство, сочетающее искусство и функциональность." },
      "b5": { id: "b5", title: "Конференц-центр", desc: "Место проведения глобальных мероприятий с современным оборудованием." },
      "b6": { id: "b6", title: "Реставрация наследия", desc: "Восстановление исторических памятников с современными стандартами безопасности." },
      "r1": { id: "r1", title: "Прибрежное шоссе", desc: "Соединение 3 крупных портов с эффективной логистикой." },
      "r2": { id: "r2", title: "Городская кольцевая дорога", desc: "Снижение городских пробок на 40%." },
      "r3": { id: "r3", title: "Горный перевал", desc: "Инженерное чудо, сокращающее время в пути вдвое." },
      "r4": { id: "r4", title: "Аэропортовское шоссе", desc: "Прямая связь с международным терминалом." },
      "r5": { id: "r5", title: "Интеллектуальная транспортная система", desc: "Инфраструктура управления дорогами с использованием ИИ." },
      "r6": { id: "r6", title: "Зеленый бульвар", desc: "Экологичная городская дорога с обширным озеленением." },
      "br1": { id: "br1", title: "Мост через залив", desc: "Самый длинный морской мост в регионе." },
      "br2": { id: "br2", title: "Речной виадук", desc: "Важная связь для торговли через реку." },
      "br3": { id: "br3", title: "Пешеходный мост", desc: "Соединение городских парков над оживленными перекрестками." },
      "br4": { id: "br4", title: "Вантовая икона", desc: "Знаковая структура, определяющая имидж города." },
      "br5": { id: "br5", title: "Железнодорожный путепровод", desc: "Поддержка расширения высокоскоростных железных дорог." },
      "br6": { id: "br6", title: "Реконструкция арочного моста", desc: "Сохранение истории при обеспечении структурной целостности." },
      "l1": { id: "l1", title: "Центральный парк", desc: "100 акров городского зеленого пространства." },
      "l2": { id: "l2", title: "Речная набережная", desc: "Оживление связи города с водой." },
      "l3": { id: "l3", title: "Ботанические сады", desc: "Сохранение биоразнообразия в сердце города." },
      "l4": { id: "l4", title: "Эко-болота", desc: "Естественная фильтрация воды и среда обитания диких животных." },
      "l5": { id: "l5", title: "Общественная площадь", desc: "Место сбора для культурных мероприятий." },
      "l6": { id: "l6", title: "Вертикальные сады", desc: "Интеграция природы в плотную застройку." },
      "w1": { id: "w1", title: "Водоочистная станция", desc: "Обеспечение чистой водой 1 миллиона жителей." },
      "w2": { id: "w2", title: "Плотина контроля наводнений", desc: "Защита долины от сезонных наводнений." },
      "w3": { id: "w3", title: "Модернизация канализационной сети", desc: "Модернизация подземной инфраструктуры." },
      "w4": { id: "w4", title: "Расширение водохранилища", desc: "Обеспечение водоснабжения в засушливые сезоны." },
      "w5": { id: "w5", title: "Городская система каналов", desc: "Восстановление исторических водных путей для туризма." },
      "w6": { id: "w6", title: "Опреснительная установка", desc: "Устойчивая пресная вода из моря." },
      "h1": { id: "h1", title: "Межштатный соединитель", desc: "Стимулирование региональной торговли и транспорта." },
      "h2": { id: "h2", title: "Горный туннель", desc: "Бурение гранита для сокращения маршрутов." },
      "h3": { id: "h3", title: "Расширение скоростной автомагистрали", desc: "Расширение пропускной способности до 8 полос." },
      "h4": { id: "h4", title: "Доступ к логистическому хабу", desc: "Выделенные полосы для тяжелого транспорта." },
      "h5": { id: "h5", title: "Живописный прибрежный маршрут", desc: "Развитие шоссе с акцентом на туризм." },
      "h6": { id: "h6", title: "Проект шумозащитного барьера", desc: "Снижение шумового загрязнения для жилых районов." }
    }
  }
};
