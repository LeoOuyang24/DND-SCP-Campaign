import * as Formats from "../routes/format.js"

export function get(SCPnum)
{
	return (
			[<Formats.IntroSubSection title = "Constant Time Elevators" num={SCPnum} containment="Dimension A1" objClass="Artificial" precursor="SCP002"
			mainImage="https://5.imimg.com/data5/UW/RA/XZ/SELLER-1185899/passenger-lifts-500x500.jpg"
			caption="Instance of ASCP001"
			intro="ASCP001 are Constant Time Elevators derived from research on SCP002, the Interdimensional Elevator. SCP002 is somehow able to travel between dimensions at the exact same speed regardless of dimensional distance. ASCP001 is a special instance that has been engineered to perform the same feat but only within different points of Dimension A1"/>,
			<Formats.Section title = "Description" message="ASCP001 resembles a normal elevator. Inside it there are 10 buttons respresenting the 10 digits of the decimal number system, allowing users to travel to any floor of A1. Traveling past level 10 without security clearance 5 is forbidden and traveling past level 30 will result in immediate termination."/>,
			<Formats.Section title="Mechanism" message={"How ASCP001 and SCP002 function is, like many aspects of parascience, a complete mystery. However, researchers have been able to extract a black box that seems to be at the heart of SCP002's function. Implementation of ASCP001 requires the simple reprogramming of this black box to travel to physical coordinates. Although programming extradimensional coordinates is a completely unknown can of worms, programming for coordinates within the same dimension is much easier. How exactly this black box allows for constant time travel is still not fully understood, although the leading theory is that it borrows time from neighboring realities."}/>] 
									
	)
}
