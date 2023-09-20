'use strict';

document.addEventListener("DOMContentLoaded", function() {
    fetch("team.json")
      .then(response => response.json())
      .then(data => {
        const teamContainer = document.getElementById("team");
        data.teammembers.forEach(member => {
          const { full_name, image, title, tag_line } = member;
          const memberDiv = document.createElement("div");
          
          const imageElement = document.createElement("img");
          imageElement.src = image;
          memberDiv.appendChild(imageElement);
          
          const fullNameHeading = document.createElement("h3");
          fullNameHeading.textContent = full_name;
          memberDiv.appendChild(fullNameHeading);
          
          const titleHeading = document.createElement("h3");
          titleHeading.textContent = title;
          memberDiv.appendChild(titleHeading);
          
          const tagLineParagraph = document.createElement("p");
          tagLineParagraph.textContent = tag_line;
          memberDiv.appendChild(tagLineParagraph);
          
          teamContainer.appendChild(memberDiv);
        });
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  });
  