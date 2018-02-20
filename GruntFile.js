module.exports = function(grunt) {
	grunt.initConfig({
		concat_css: {
    	all: {
      		src: ["IN/*.css"],
      		dest: "OUT/index.css"
    		}
		},
		autoprefixer: {
			files: {
				src: "IN/main.css",
				dest: 'OUT/main.css'
			}
		},
		watch: {
			css: {
				files: ["IN/*.css"],
				tasks: ["concat_css", "autoprefixer"]
			}
		}
	});


	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concat-css");
	

	grunt.registerTask("default", ["autoprefixer"]);

	grunt.registerTask("concat", ["autoprefixer", "concat_css"]);

	grunt.registerTask("watch", ["watch"]);
	
	
};
