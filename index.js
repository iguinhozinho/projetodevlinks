import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNp4lghgFh6nlz0b3A05FoHC9b51esayI",
  authDomain: "projetodevlinks.firebaseapp.com",
  projectId: "projetodevlinks",
  storageBucket: "projetodevlinks.appspot.com",
  messagingSenderId: "867100756446",
  appId: "1:867100756446:web:552b13dec49e1d3ea2b54f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const linksCollection = collection(db, "links");

async function loadLinks() {
  const linksSnapshot = await getDocs(linksCollection);
  const linkList = document.getElementById("link-list");
  linkList.innerHTML = "";
  linksSnapshot.forEach((doc) => {
    const linkData = doc.data();
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <a href="${linkData.url}" target="_blank">${linkData.label}</a>
    `;
    linkList.appendChild(listItem);
  });
}

loadLinks();