/*
 * Sample code to start the given instance based on instance OCID and region.
 * 
 * Sample Output:
 * (Prints the instance details)
 */

const common = require("oci-common");
const core = require("oci-core");

const adp = new common.ConfigFileAuthenticationDetailsProvider();

//Default Region. This can be overridden with query parameter
const region = process.env.REGION ? process.env.REGION : common.Region.US_ASHBURN_1;
const instanceAction = "START"; // Refer: https://docs.oracle.com/en-us/iaas/tools/oci-cli/2.12.7/oci_cli_docs/cmdref/compute/instance/action.html

var startInstance = (req, res) => {
    (async ()=> {
        //Create the compute client to query compute details.
        const computeClient = new core.ComputeClient({
            authenticationDetailsProvider: adp        
        });

        computeClient.region = region;
        if(req.query.region)
            computeClient.region = req.query.region;
        
        const instanceActionRequest = {
            instanceId: req.query.id,
            action: instanceAction
        };
        const instanceActionResponse = await computeClient.instanceAction(instanceActionRequest);
        res.send(instanceActionResponse);
    })();
}

module.exports = startInstance;
