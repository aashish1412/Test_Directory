from flask import Flask, request, jsonify, Response
from flask_cors import CORS , cross_origin
import os

app = Flask(__name__)
CORS(app)



@app.route('/<path:req_path>', methods=['GET'])
def dir_listing(req_path):

	BASE_DIR = '/tmp/test_redhat'

	abs_path = os.path.join(BASE_DIR, req_path)


	List = ['No such directory found']

	if os.path.exists(abs_path):
		files = os.listdir(abs_path)

		return jsonify(files)
	else:
		response = Response(status=404)
		return jsonify(List)
		app.run()

		




        
         
    
    	
    	


			
	
	
		

		



	



	









	         
	         	

	         	
	         		

	         		
	         		

	         		












			

	         

	         	

	         	
	         		

	         		
	         		

	         		








	
		

		
			

			
			

			




	
        
    
        

	
	

	

	
		

        
    	    

    	    
    	    

    	    