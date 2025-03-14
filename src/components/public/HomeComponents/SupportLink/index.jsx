import Image from "next/image";
import styles from "./styles.module.css";
import Heading2 from "@components/Heading2";

const SupportLink = () => {
  const links = [
    {
      id: 1,
      src: "/GUGLogo.jpg",
      alt: "Gurugram University",
      href: "https://gurugramuniversity.ac.in/",
    },
    {
      id: 1.5,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgODmEhQmHz6qZwIdcuhDUSxWpOIur2AxcKuGqX83VtK0uLWv7QkIQKMOLf01Nbz5ObwxzBxk3lLev-BojdyWoLYK-hwkn1oIuVVcCbZoYXf_PMbyHHyTQTqoEQz_sfkwjBui_UPwwYHARr_ZYGrGBXXtza6sV3OWPe_DnoK15KdtpDpmZFBtZTXP112jk/s480/e-kalyan_logo.png",
      alt: "eKalyan logo",
      href: "https://ekalyan.cgg.gov.in/",
    },
    {
      id: 2,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcP8XeHvl2hdIRxAy0mKJLokMkpIM31DRG25oXMePI_E8Kd4fsmywpI2P78kAt5XUTQEg5Kj0EP4Cvl5Vj0sMqLD4vfQgK5gS5wrfPx4cESrY7rIMgTPktgH1LHpLfiF2VtAEa4ZUJd1jbOMSgTzKpg4XWJMDDVT3HLKqABxLlAr3ehHfmZh0tJ-czfP0/s502/chancellor-portal-logo.png",
      alt: "chancellor portal logo",
      href: "https://jharkhanduniversities.nic.in/home",
    },
    {
      id: 3,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmShYHP_vfm4FHL68tN0snPLpD7FJbLNqwaY_y3uqwkZVzLeBTgUU_KMI7XFFvLIJ-8CjYfuDMXD9fSqnfbpdlwWRmrR0fDLNzU6lxC_AhyphenhyphendQoqR9rrNTk-Xd96dOL5uhKmP1c2kZnkpULg1SVPglVURsLlJbt7g12BEgVtDZjfzafyMySjbQSupYGX8Y/s180/digilocker_logo.png",
      alt: "DigiLocker",
      href: "https://www.digilocker.gov.in/",
    },
    {
      id: 4,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvq2bwST50y8Fll14jKx2MamEzjjMDP8E3HEe1hhvyS7sHc39rZWzZ_qYa3tzP4H2X0Wgw6fZwK0k3l2XGiVbJxVM2wnImO3yU98psfqneHGdPiPA4xFeJqb_P6GcNpLTtr3Dh6mm-poSbM34iz1RiQXnFz3K62B4nCv42R9HpHT3OP2f1QYi0lBqkXBA/s512/digital-india.png",
      alt: "Digital India",
      href: "https://digitalindia.gov.in/",
    },
    {
      id: 5,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2b1p4qe8p7J_K-PD7XlNBGd-skFY_sjKLSCCPSgYAHWL2Ofbx0J5JAwXt2pTQO4esQEmb8RATd-TcRgsvdyWfRjIJYWyQOt4KRsY4WIJPhXdbDvRgGc7GHTdgNd_yFXpEK4oixLgaoPozzAkO75FJkoc7QzfVsFQMvDe8wKPEZqo3w1l9qhgeg2_wDDs/s329/UGC_Logo.png",
      alt: "UGC",
      href: "https://www.ugc.gov.in/",
    },
    {
      id: 6,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJY2WwEGT_1W4KPdD8AOOnkuejbyMStdb845dzixkWM570cRTcTxY08uA-WIcBlOmt-cFgSi6Q4nQtmKSlLi6DXkI2CnL1yyzt1L_4j27dGxmPm86Fv-oJPVLqgdbsaJ0Wq8wqdp_UHt8N-1Nl6cYCeHr9D3XxF1pJYZe0fWfKwZ1EmiAZ6QztVeys69Y/s327/india-gov.png",
      alt: "India.gov.in",
      href: "https://www.india.gov.in/",
    },
    {
      id: 7,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWddUMgjAOj3Yli-sZtrbNHSJG4p_cLU1lBNiOx7wcByDLyPTbZmhtPAPJ4jtVBOVenM0Ml9935vfQqWNDiye_1dERdwvqC0kfZS3QwbnG_5EOcR9H1Y6cCcFRHB9juMe42e18NZfI4szDx0H6DHZ4ua7PQibFSdeGXtGQgOZxWtfQHF0u9srBiblf7bY/s300/my-gov.webp",
      alt: "My Gov",
      href: "https://www.mygov.in/",
    },
    {
      id: 8,
      src: "/Haryana-gov.jpg",
      alt: "Haryana gov",
      href: "https://haryana.gov.in/",
    },
  ];
  return (
    <section className="my-8">
      <div className="max-w-screen-xl mx-auto p-3 overflow-hidden">
        <Heading2 headingText={"Quick Links"} />
        <div
          className={`${styles.linkImage} m-3 flex items-center gap-8 min-w-fit`}
        >
          {links.map((link) => (
            <a
              className="h-36 w-36 flex items-center"
              key={link.id}
              href={link.href}
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <Image src={link.src} alt={link.alt} height={120} width={120} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportLink;
