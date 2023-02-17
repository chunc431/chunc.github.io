const cursor = document.querySelector('.cursor__inner');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

function goToPage2() {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
      }
function goToPage3() {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
      }
function goToPage4() {
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "block";
      }
function goToPage5() {
        document.getElementById("page4").style.display = "none";
        document.getElementById("page5").style.display = "block";
      }
function goToPage6() {
        document.getElementById("page5").style.display = "none";
        document.getElementById("page6").style.display = "block";
      }

