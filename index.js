function t(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}function e(t){if(!t)return null;var e=t.toUpperCase();return e.length<7?e:e.substr(0,3)+"-"+e.substr(3)}function n(t,e,n,o,r,i,a){$.post("https://ecast.jackboxgames.com/storage/content",JSON.stringify({appId:t,categoryId:{"c01f66be-745d-4173-8dac-c60395b2437a":"QuiplashPrompt",drawful2:"DrawfulPrompt"}[t],userId:n,metadata:{author:o,title:r},blob:{content:i.map(function(t){return{author:{id:n,name:o},text:t}})},creator:{platformId:e,platformUserId:""}}),function(t){a({success:!0,data:t})}).catch(function(t){a({success:!1})})}function o(t,e){return Math.floor(Math.random()*(e-t+1))+t}$(function(){var r=t(),i=[],a=!0;function s(){var t=$(".prompt-input").val().trim().substring(0,150);if(""!=t){$(".prompt-input").val("");var e=o(1,1e6);i.push({text:t,id:e});var n=$("<div/>").addClass("prompt-text").text(t),r=$("<button/>").addClass("prompt-delete-button").text("X").click(function(){i=i.filter(t=>t.id!=e),a.remove()}),a=$("<div/>").addClass("prompt").append(n).append(r);$(".prompts").prepend(a)}}$(".publish-button").click(function(){if(a){a=!1;var t=$(".game-select").val(),o={"c01f66be-745d-4173-8dac-c60395b2437a":"Quiplash 2",drawful2:"Drawful 2"},s=$(".platform-select").val(),u=$(".title-input").val().trim().substring(0,50),l=$(".author-input").val().trim().substring(0,12).toUpperCase(),p=!1;0==i.length&&(p="Please enter some prompts before publishing."),""==u&&(p="Please enter an episode name before publishing."),p?(Swal.fire({icon:"warning",title:p}),a=!0):Swal.fire({title:"Are you sure you want to publish this episode?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Publish"}).then(p=>{p.value?(Swal.fire({icon:"info",title:"Publishing episode&hellip;",showConfirmButton:!1}),n(t,s,r,l||"ANONYMOUS",u,i.map(t=>t.text),function(n){console.log(n),a=!0,n.success?Swal.fire({icon:"success",title:e(n.data.contentId),text:`Your custom episode for ${o[t]} has been published. The episode ID is shown above.`}):Swal.fire({icon:"error",title:"There was an error while publishing the episode."})})):a=!0})}}),$(".prompt-add-button").click(s),$(".prompt-input").on("keyup",function(t){13==t.keyCode&&s()})});
