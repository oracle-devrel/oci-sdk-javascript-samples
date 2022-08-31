/*
 * Sample code to get list of instances in particular region, compartment.
 * You may still add more select criteria in ListInstancesRequest like compartmentId.
 * 
 * Sample Output (Masked):
 * Instance: ocid1.instance.oc1.iad.anu...xru2a
 */

const common = require("oci-common");
const core = require("oci-core");

const adp = new common.ConfigFileAuthenticationDetailsProvider();

//Default Region. This can be overridden with query parameter
const region = process.env.REGION ? process.env.REGION : common.Region.US_ASHBURN_1;
const compartmentId = adp.getTenantId();

var listInstances = (req, res) => {
    
    (async ()=> {
        //Create the compute client to query compute details.
        const computeClient = new core.ComputeClient({
            authenticationDetailsProvider: adp        
        });
        computeClient.region = region;
    
        //Prepare the request with more criteria.
        const listInstanceRequest = {
            compartmentId: compartmentId
        };
    
        //Execute the request
        const listInstanceResponse = await computeClient.listInstances(listInstanceRequest);
    
        // var response = "";
        // //Read the response
        // listInstanceResponse.items.forEach(instance => {
        //     response += instance.id + "<br>";
        // })
        res.send(listInstanceResponse.items)
    })();
}

module.exports = listInstances;