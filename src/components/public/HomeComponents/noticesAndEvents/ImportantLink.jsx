const ImportantLink = () => {
  const impLinks = [
    {
      text: "» Check Your Result",
      path: "https://gurugramuniversity.ac.in/",
    },
    {
      text: "» Exam Form - GUG",
      path: "https://gurugramuniversity.ac.in/",
    },
    {
      text: "» All syllabus Download ",
      path: "https://gurugramuniversity.ac.in/academics/syllabus/index.php",
    },
    {
      text: "» Download Admit Card - GUG ",
      path: "https://gurugramuniversity.ac.in/AIMS_PMC/index.php",
    },
    {
      text: "» Academic Bank of Credits (abc id)",
      path: "https://gurugramuniversity.ac.in/",
    },

    {
      text: "» Check Result - GUG ",
      path: "https://gurugramuniversity.ac.in/AIMS_PMC/index.php",
    },
    {
      text: "» University Grants Commission (UGC)",
      path: "https://gurugramuniversity.ac.in/AIMS_PMC/index.php",
    },
  ];
  return (
    <div className="grid my-4">
      {impLinks.map((link, index) => (
        <div
          className="border-t border-b border-white w-full p-4 animation-on-scroll"
          key={index}
        >
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            className="block duration-500 relative hover:translate-x-4"
            href={link.path}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImportantLink;
