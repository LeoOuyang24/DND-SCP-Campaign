import * as Formats from "../routes/format.js"

export function get(SCPnum)
{
	return (	
			[<Formats.IntroSubSection title = "The Rusted Man" num={SCPnum} containment="N/A" objClass="Keter" 
			mainImage="https://static.wikia.nocookie.net/gods_and_demons/images/f/f3/Scp_106_by_depressedcoconut_dc5klqu-fullview.jpg"
			caption="Last picture of SCP008 before it breached containment"
			intro="SCP008 is a humanoid entity that appears to be infused with SCP 010 (Security Clearance 7 required to access). It was stored on Containment level 3-PJ before breaching containment on February 28th, 2021."/>,
			<Formats.Section title ="Containment" message="Containment of 008 was stored on Level 3-PJ, where it was enclosed in an infinite pocket dimension composed of nothing. SCP008 can temporarily corrode everything it touches, converting it into substances similar to that of SCP010. These substances do not spread infinitely and instead revert back to normal form after a time, varying based on the object's original composition."/>,
			<Formats.Section title = "Breach" message= "SCP008 is one of the few SCPs to ever successfully breach containment. The method that it did so is still unknown; in fact, trackers indicate that a breach happened on February 30th 2021. This is most likely due to a bug, all trackers have since been retracted and replaced."/>,
			<br/>,
			<Formats.MessageSubSection message="The whereabouts of SCP008 are still as of yet unknown. All Foundation agents are to be on high alert. Level 3 ghost agents have been deployed in many major cities."/>,
			<Formats.Section title="Description" message="008 resembled a humanoid entitiy covered in a liquified version of SCP 010. It was capable of walking on solid surfaces even when they were temporarily converted to SCP010. It often attempted to communicate with Foundation employees but was incapable of forming words."/>
			]
			)
}