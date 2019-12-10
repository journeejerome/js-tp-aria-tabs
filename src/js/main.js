(function () {
    const Tabs = {
        init(){
            document.documentElement.className = 'js-enabled';
            for(const element of document.querySelectorAll(".tablinks")){
                element.addEventListener("click", this.showElement);
            }
        },
        showElement(event){
            for(const element of document.querySelectorAll(".active")){
                element.classList.remove("active");
            }
            event.currentTarget.classList.add("active");
            document.querySelector(`#${event.currentTarget.dataset.country}`).classList.add("active");
        }
    };
    Tabs.init();
})();