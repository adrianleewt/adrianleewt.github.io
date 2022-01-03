/**
 * This file controls the work experience component w/ JQuery.
 */
const sidebar = $('#experience-side');
const company = $('#experience-desc-name');
const date = $('#experience-desc-date');
const list = $('#experience-desc-list');
const pos = $('#experience-desc-pos');

const data = [
  {
    name: 'Amazon (incoming)',
    position: 'Software Development Engineer',
    disabled: true,
    start: '2022',
    end: null,
    desc: [],
  },
  {
    name: 'MyTake',
    position: 'Co-Founder',
    disabled: false,
    start: 'June 2021',
    end: 'present',
    desc: [
      'Built a full-stack mobile application with React Native and Firebase, including voice memo and real time chat features.',
      'Unit tested all backend cloud functions and frontend components with local emulators and Jest, achieving a 90% and 75% code coverage, respectively.',
      'Conducted surveys and interviews with over 50 people to identify market needs, informing the UX and brand design.',
    ],
  },
  {
    name: 'rapStudy',
    position: 'Head of Product',
    disabled: false,
    start: 'Nov. 2019',
    end: 'June 2021',
    desc: [
      'Led 15 engineers and designers in building a web app using React and Firebase for students in over 30 schools.',
      'Built a suite of music supply chain automation and customer onboarding tools using Python and Google Cloud Functions, leading to a 20% reduction in production time and rapid onboarding for partner schools.',
      'Collected and analyzed listening data with BigQuery and Google Data Studio to identify student preferences, shaping the strategy for music production that led to a 25% increase in average listening time.',
    ],
  },
  {
    name: 'Bowtie',
    position: 'Growth and Acquisitions Intern',
    disabled: false,
    start: 'June 2018',
    end: 'August 2018',
    desc: [
      'Built Python tools to improve contracts, leading to a 33% increase in readability in the insurance product policy.',
      'Developed text pre-processing scripts to format over 65,000 words in 22 competitor policies and performed data analysis to identify weak points to strengthen in our own documents.',
      'Constructed 6 service agreements efficiently by using MS Word template functions for partner firms to reach more than 10,000 potential customers while maintaining sufficient detail to manage risk.',
    ],
  },
  {
    name: 'Cornell Hedge Fund',
    position: 'Chief Operations Officer',
    disabled: false,
    start: 'Feb. 2019',
    end: 'Feb. 2021',
    desc: [
      'Pitched TSM after detailed equity research on supply chains and demand side drivers, leading to a 123% return.',
      'Developed Python scripts to determine sentiment changes in earnings call transcripts to support investments.',
      'Developed equity research reports on WMT and ATVI as one of 10 portfolio monitors managing $8,000 in AUM.',
    ],
  },
  {
    name: 'Fujifilm HK',
    position: 'Marketing Intern and Product Specialist',
    disabled: false,
    start: 'May 2017',
    end: 'July 2017',
    desc: [
      'Formulated a renovation proposal regarding retail space efficiency based on market research on physical stores, which was later executed to increase conversion rate in the primary showroom.',
      'Developed new marketing strategies for the new camera line to better fit regional preferences, increasing traffic to both online and offline retail.',
      'Communicated with 30-50 customers per day to personalize their retail experience and provide them the ideal camera solution for their specific needs.',
    ],
  },
];

function render(active) {
  // Cleanup
  [sidebar, company, date, list].forEach((e) => {
    e.empty();
  });

  // Iterate over data items
  for (let i = 0; i < data.length; i++) {
    const exp = data[i];
    const sideItem = $(`<p>${exp.name}</p>`);

    // Styling conditional for sidebar item
    sideItem.addClass(
      exp.disabled
        ? 'experience-side-disabled'
        : i === active
        ? 'experience-side-active'
        : 'experience-side-default'
    );

    // Setup onclick functionality for sidebar item
    if (!exp.disabled && i !== active) {
      sideItem.click(() => {
        render(i);
      });
    }

    // Add to DOM
    sidebar.append(sideItem);
  }

  // Edit desc for active item
  const curr = data[active];
  company.text(curr.name);
  date.text(curr.start + '-' + curr.end);
  pos.text(curr.position);
  curr.desc.forEach((bullet) => {
    list.append(`<li>${bullet}</li>`);
  });
}

render(1);
