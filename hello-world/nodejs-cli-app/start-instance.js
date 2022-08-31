/*
 * Sample code to start the given instance based on instance OCID and region.
 * 
 * Sample Output:
 * (Prints the instance details)
 */

const common = require("oci-common");
const core = require("oci-core");

const adp = new common.ConfigFileAuthenticationDetailsProvider();

const region = process.env.REGION ? process.env.REGION : common.Region.US_ASHBURN_1;
if(process.argv.length < 3) {
    console.error("Instance OCID argument is missing");
    process.exit(1);
}

const instanceId = process.argv[2]; //Pass the instance id as command line arg.
const instanceAction = "START"; // Refer: https://docs.oracle.com/en-us/iaas/tools/oci-cli/2.12.7/oci_cli_docs/cmdref/compute/instance/action.html

(async ()=> {
    //Create the compute client to query compute details.
    const computeClient = new core.ComputeClient({
        authenticationDetailsProvider: adp        
    });
    computeClient.region = region;

    const instanceActionRequest = {
        instanceId: instanceId,
        action: instanceAction
    };
    const instanceActionResponse = await computeClient.instanceAction(instanceActionRequest);
    console.log(instanceActionResponse);
})();
