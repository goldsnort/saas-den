let subData = [
  {
    appId: "figma123",
    subname: "Figma",
    Amount: "12",
    noOfLicense: "5",
    nextRenewal: "01/08/2022",
    activeLicense: "4",
    employees: [
      "Aryaman Singh",
      "Chuckwunonso Obidike",
      "Dheeraj Kumar",
      "Rushant Ashtputre",
    ],
  },
  {
    appId: "netflix_india",
    subname: "Netflix",
    Amount: "6.8",
    noOfLicense: "4",
    nextRenewal: "10/08/2022",
    activeLicense: "4",
    employees: [
      "Aryaman Singh",
      "Nishit Pandit",
      "Vadiraj",
      "Rushant Ashtputre",
    ],
  },
  {
    appId: "google-one-storage",
    subname: "Google One Storage",
    Amount: "1.65",
    noOfLicense: "6",
    nextRenewal: "13/08/2022",
    activeLicense: "6",
    employees: [
      "Aryaman Singh",
      "Chuckwunonso Obidike",
      "Dheeraj Kumar",
      "Nishit Pandit",
      "Rushant Ashtputre",
      "Vadiraj",
    ],
  },
  {
    appId: "amazon-prime",
    subname: "Amazon Prime",
    Amount: "2.27",
    noOfLicense: "5",
    nextRenewal: "05/08/2022",
    activeLicense: "5",
    employees: [
      "Chuckwunonso Obidike",
      "Dheeraj Kumar",
      "Nishit Pandit",
      "Rushant Ashtputre",
      "Vadiraj",
    ],
  },
  {
    appId: "spotify-premium",
    subname: "Spotify Premium",
    Amount: "2.28",
    noOfLicense: "5",
    nextRenewal: "01/08/2022",
    activeLicense: "5",
    employees: [
      "Aryaman Singh",
      "Chuckwunonso Obidike",
      "Dheeraj Kumar",
      "Nishit Pandit",
      "Rushant Ashtputre",
    ],
  },

  {
    appId: "linkedin-premium",
    subname: "Linkedin premium",
    Amount: "12.69",
    noOfLicense: "5",
    nextRenewal: "01/07/2023",
    activeLicense: "4",
    employees: [
      "Aryaman Singh",
      "Chuckwunonso Obidike",
      "Nishit Pandit",
      "Rushant Ashtputre",
    ],
  },
];

let subscription = "",
  amountSpent = 0,
  saveUpto = "";
function createTop(a) {
  subscription = a.length;
  for (let x of a) {
    amountSpent += parseInt(x.Amount) * parseInt(x.noOfLicense);
  }
}
async function abc() {
  await createTop(subData);
}
abc();

createTop(subData);

export { subData };
