// coded by jade allen cook

// index.html
app.controller('data', function ($scope) {
    if (business.titleTag == true) $('title').text(business.name + ' | ' + business.tag);
    else $('title').text(business.name);
    // apply primary font to body
    $('head').append('<link href="' + fonts.primary.link + '" type="text/css" rel="stylesheet" />');
    $('body').css({
        fontFamily: fonts.primary.name + ', ' + fonts.primary.secondary
    });
    // apply header font to all headers
    $('head').append('<link href="' + fonts.header.link + '" type="text/css" rel="stylesheet" />');
    $('h1, h2, h3, h4, h5, h6').css({
        fontFamily: fonts.header.name + ', ' + fonts.header.secondary
    });
});

// home.html
app.controller('home', function ($scope) {
    $('div#quote-container div h1#title').css({
        color: color.primary,
        fontFamily: fonts.header.name
    });
    // using tabletop to get gDoc
    function tabletop(doc) {
        Tabletop.init({
            key: doc,
            callback: insertDoc,
            simpleSheet: false
        });
    }
    // after gDoc loads
    function insertDoc(data, tabletop) {
        var videos = data.videos.elements;
        video = data.videos.elements[0];
        // init build
        function build(num) {
            // video preview
            function video(id) {
                $('div#quote-container div').empty().append(
                    '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>' +
                    '<br />' +
                    '<div class="suprise">' +
                    'Suprise' +
                    '</div>'
                );
                // event listeners 
                $('div.suprise').click(function () {
                    var suprise = Math.floor(Math.random() * videos.length);
                    build(suprise);
                });
            }
            $('div#quote-container div').empty().append(
                '<h1 id="title"></h1>' +
                '<br />' +
                '<p id="about"></p>' +
                '<br />' +
                '<div class="video" id="' + videos[num].url + '">' +
                'Watch Video' +
                '</div><div class="suprise">' +
                'Suprise' +
                '</div>'
            );
            $('div#quote-container div h1#title').append(videos[num].title).css({
                color: color.primary
            });
            $('div#quote-container div p#about').append(videos[num].about);
            // event listeners 
            $('div.suprise').click(function () {
                var suprise = Math.floor(Math.random() * videos.length);
                build(suprise);
            });
            $('div.video').click(function () {
                video($(this).attr('id'));
            });
        }
        build(0);
    }

    // calling and appending gDoc info
    tabletop('1Tarx0kYfw7ln1seb6-FiK2HWXEOgfRR4Q2X3payy8u4');
});