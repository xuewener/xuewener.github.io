var posts=["2023/07/03/hello-world/","2023/07/05/二十块初识/","2023/07/10/zy1234567/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};