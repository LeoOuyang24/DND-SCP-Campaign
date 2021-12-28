import * as Formats from "../routes/format.js"
import pic from  "../images/007.png"

export function get(SCPnum)
{
	return (	
			[<Formats.IntroSubSection title = "Gluttony" num={SCPnum} containment="Floor 3-AV (Security Clearance 3 needed)" objClass="Keter" 
			mainImage={pic}
			caption="1705 painting of one instance of SCP007"
			intro="SCP007 is a demonic entity stemming from the collective human belief in the sin of Gluttony. Instances of 007 have appeared since antiquity, particularly after the advent of Christianity. It's unknown the exact origin of the entity but it frequently manifests itself as a statue of a smiling black pig."/>,
			<Formats.Section title ="Containment" message=""/>,
			<div>
			<strike>
				SCP007 has never previously been contained. Its existence is only known through historical texts and documents.
			</strike>,
			<b>UPDATE March 1 2021</b>: SCP007 was retrieved by low level Foundation agents in a tomb containing remnants of SCP005. It is possible workers digging out the tomb encountered 007 and were subsequently consumed. Research is ongoing.
			</div>,
			<Formats.Section title = "Description" message= "SCP007 often takes up the appearance of a small black pig figurine. Reports of SCP007 appearance have included:"/>,
			<Formats.ListSubSection ordered = {false} list={[
				"A hollow figurine that contains unknown coins",
				"A bipedal figurine holding a half eaten goat carcass",
				"A quadripedal pig with a human face",
				"A bipedal pig holding a half eaten human fetus",
				"A massive pig sitting atop a pile of bones",
				"A smiling bipedal pig sitting in a pit of fire",
				"A bipedial figurine holding a half eaten watermelon (Updated March 1 2021)"
			]}/>,
			<Formats.Section title = "Abilities" message = {"The lack of containment of SCP007 has made knowledge of its abilities hard to fully describe. Many historical sources also exaggerate the abilities of 007, although some consensus has been reached: "}/>,
			<Formats.ListSubSection ordered = {false} list={[
				"Telepathy",
				"Tracking of individuals",
				"Ability to change appearance of other individuals, as if by Alter Self spell",
				"Various fire spells, including Fireball, Hellish Rebuke, and Wall of Flame",
				"Ablity to cast Darkness"
			]}/>,
			<Formats.MessageSubSection message="The most defined and well-known of 007's abilities is its infinite hunger and potential to devour living organisms. 007 seems to prefer consuming intelligent creatures; it is highly unlikely for it to pursue anything other than meat unless under extreme circumstanes. How 007 exactly consumes is unknown and has never been recorded, all is known is that 007 is good at it and is extremely dangerous if allowed to consume, capable of consuming vast quantities of flesh if given the chance."/>,
			<br/>,
			<Formats.MessageSubSection message="SCP 007 is also able to form telepathic links with victims, during which it can communicate with the host at will as well as eavesdrop on the host's conversations. This is the only known way for 007 to communicate telepathically. Like many similar SCPs, who 007 bonds with is most likely based on who it feels the strongest connection to, as well as who is most likely to agree to 007's demands. Solutions for bonding can typically be solved with amnestics or by containing 007 in an impenetrable interdimensional barrier."/>,
			<br/>,
			<div>
			It is unknown if any of 007's abilities work interdimensionally.
			</div>
			]
			)
}