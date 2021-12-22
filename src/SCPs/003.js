import * as Formats from "../routes/format.js"
import pic from  "../images/003.png"

export function get(SCPnum)
{
	return (	
			[<Formats.IntroSubSection title = "Padlocks" num={SCPnum} containment="05 Council" objClass="Thaumiel" 
			mainImage={pic}
			caption="SCP003-A - SCP003-F"
			intro="SCP003 is the collective term for 5 padlocks (A-D) and 1 key (F) that individuals can attune to. Humans attuned to the padlocks (Servants) are completely unable to harm or prevent the actions of the individual attuned to the key (Master). This makes SCP003 a pivotal SCP in maintaining the chain of command. The Master is the Director, and the 5 Servants can be his closest accomplices, now known as the 05 Council."/>,
			<Formats.Section title = "Containment" message= "All 6 instances can be safely dismisssed and gathered from a pocket dimension. Containment is therefore trivial"/>,
			<Formats.Section title = "Current Owners" message = ""/>,
			<Formats.ListSubSection ordered="true" list={[
				"William WoodHeart: Head of Security, attuned to SCP003A",
				"Amelia Barshtock: Head of Containment and Procedures, attuned to SCP003B",
				"Samuel \"Sweebs\" Leebson: Head of Research, attuned to SCP003C",
				"Jimmy Carlson/The Growth: Symbiotic Heads of Maintenance, attuned to SCP003D",
				"Malinda Iliam: Head of Finances, attuned to SCP003E",
				"Dr. Finn LaMensch: The Director, attuned to SCP003F"]}/>,
			]
			)
}