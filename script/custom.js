const root = () => {
    const rootPath = 'https://open-range-org.github.io';
    const loadHeader = () => {
        $('#header').load(rootPath + '/common/header.html', () => {
            $('#logo').attr("src", rootPath + '/images/openorglogo.png');
            $('.home-link').attr("href", rootPath);
        });
    };
    const loadFooter = () => {
        $('#footer').load(rootPath + '/common/footer.html');
    };
    const loadProjectHeader = (projectName) => {
        $('#page-header').load(rootPath + '/' + projectName + '/projectHeader.html');
    };
    const loadProjecSideBar = (projectName) => {
        $('#left-bar').load(rootPath + '/' + projectName + '/projectSidebar.html');
    };
    const loadContentText = (projectName, filename) => {
        $('#content-text').load(rootPath + '/' + projectName + '/pagecontent/' + filename + '.html', () => {
            reloadPrismJs();
        });
    };
    const resetActive = (bloclLinkList,fileName) => {
        bloclLinkList.each(function(index,element) {
            $( this ).removeClass("active-block");
            var dataFileName= $(element).attr("data-file");
            if(dataFileName==fileName){
                $(this).addClass("active-block");
            }
          });
    };
    const reloadPrismJs = () => {
        $('#prism-js').remove();
        var script = document.createElement('script');
        script.id = 'prism-js';
        script.src = '../script/prism.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('html')[0].appendChild(script);
    };
    return { loadHeader, loadFooter, loadProjectHeader, loadProjecSideBar, loadContentText, resetActive };
};