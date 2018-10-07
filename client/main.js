window.onload = function (ev) {
   //加载后台数据
   axios.get("http://localhost:3000/Movies")
       .then(function (response) {
            var movies =response.data;
            var str ='';
            for (var i=0;i<movies.length;i++){
                var star = "★★★★★☆☆☆☆☆";
                var rate = Math.round(movies[i].score/2);
                str += '<li class="moviesBox"><div class="mPost"><img src='+movies[i].img +' alt='+movies[i].title+'></div><div class="mTitle">'+movies[i].title+'</div><div class="mScore">'+star.slice(5- rate,10-rate)+movies[i].score+'分</div>'
            }
           var moviesRow = document.getElementById("moviesRow");
           moviesRow.innerHTML += str;
            // movies.forEach(movie =>{
            //     var star = "★★★★★☆☆☆☆☆";
            //     var rate = Math.round(movie.score/2);
            //     str +='<li class="moviesBox"><div class="mPost"><img src="${movie.img}" alt="${movie.title}"></div><div class="mTitle">${movie.title}</div><div class="mScore">${star.slice(5- rate,10-rate)+movie.score}分</div>'
            // });
            // var moviesRow = document.getElementById("moviesRow");
            // moviesRow.innerHTML += str;
       })
       .catch(function (error) {
            console.log(error);
       })

};