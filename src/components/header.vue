<template>
	<nav class="navbar navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
    	  		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    	    		<span class="sr-only">Toggle navigation</span>
    	    		<span class="icon-bar"></span>
    	    		<span class="icon-bar"></span>
    	    		<span class="icon-bar"></span>
    	  		</button>
				<router-link to="/" class="navbar-brand">题库在线系统</router-link>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    		  	<ul class="nav navbar-nav">
    		  		<li><router-link to="/Software">软件工程导论</router-link></li>
    		  	  	<li><router-link to="/C">c语言</router-link></li>
    		  	  	<li><router-link to="/English">大学英语</router-link></li>
    		  	  	<li><router-link to="/Conputer">计算机应用基础</router-link></li>
    		  	  	<li><router-link to="/Math">高等数学</router-link></li>
    		  	</ul>
    		  	<!-- <form class="navbar-form navbar-left" role="search">
    		  	  	<div class="form-group">
    		  	    	<input type="text" class="form-control" placeholder="Search">
    		  	  	</div>
    		  	  	<button type="submit" class="btn btn-default">Submit</button>
    		  	</form> 
    		  	<ul class="nav navbar-nav navbar-right">
    		  	  	<li><a href="#">Link</a></li>
    		  	</ul>-->
    		</div>
		</div>
	</nav>
</template>
<style>
	.navbar{
		background-color: #4f8fff;
	}
	
	.navbar-brand,.navbar-nav > li > a{
		color: #fff;
	}
	
	.icon-bar{
		background: #fff;
	}
	
	a, a:hover{
		text-decoration: none;
	}
	
	nav a:hover,nav a:focus{
	    color: #fff;
	    font-weight: bold;
	}
	
	.nav > li > a:hover, .nav > li > a:focus{
		background-color: #2970f9;
	}
	
	ul > li{
		list-style-type:none;
	}
</style>