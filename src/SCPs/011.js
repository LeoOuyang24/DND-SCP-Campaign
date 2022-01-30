import * as Formats from "../routes/format.js"
import pic from  "../images/011.jpg"

export function get(SCPnum)
{
	return (	
			[<Formats.IntroSubSection title = "The Obelisk" num={SCPnum} containment="The moon" objClass="Keter" 
			mainImage={pic}
			caption="The only image of SCP011, taken by the LM-5 on its moon expedition in 2020."
			intro="The Obelisk is an anomalous structure detected on the moon of Earth, first noticed by Neil Armstrong on his initial moon trip in 1969 as well as numerous other astronauts in subsequent moon trips. It was first photographed by the Chinese space shuttle LM-5 in 2020 where the image went viral before the Foundation's antimemetics program wiped the image from the internet. The exact function of the Obelisk is currently unknown but it appears to be surrounded by various levitating particles, including numerous large shards composed of the same material as the main Obelisk. The obelisk appears to be made of a dark substance and constantly shifts locations. The latter fact as well as its location makes study of 011 notoriously difficult."/>
			]
			)
}