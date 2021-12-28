import * as Formats from "../routes/format.js"
import { NavLink } from "react-router-dom";

export function get(SCPnum)
{
	return (
			[<Formats.AIntroSubSection title = "Apparatus of Kwalish" num={SCPnum} containment="Floor 9-A" objClass="Artificial" precursor="Unknown" 
			mainImage="https://static.wikia.nocookie.net/forgottenrealms/images/3/39/Apparatus_of_kwalish-5e.jpg"
			caption="The original Apparatus of Kwalish."
			intro="The Apparatus of Kwalish is the first discovered artificial SCP, although it is far from the oldest. Constructed sometime in the 15th century, it far exceeds the technology of that time. Only one wild-type specimen has been found, although many duplicates have been created called ASCP000-A, more colloquially known as Crab-Mobiles."/>,
			<Formats.Section title = "Description" message="The Apparatus resembles a large lobster with robotic and retractable legs and claws. It appears to be made almost entirely out of tin although it possesses defensive qualities far exceeding that of tin. Some of the physical capabilities of the Apparatus include: "/>,
			<Formats.ListSubSection ordered = {false} list={["Pressure resistance up to 100 atm (about 3300 feet below sea level)", "Unlimited oxygen, filtered from an unknown source", 
			"5 feet of movement per second on land, underwater, and when climbing",
			"Interior capacity has 10 seats for 10 medium-sized individuals, despite the exterior being far too small to contain such a volume."]}/>,
			<Formats.MessageSubSection message="The Apparatus also has a set of 10 controls that are further detailed in its own section."/>,
			<br/>,
			<Formats.MessageSubSection message="Although the Apparatus can serve as a form of transportation, it has the anomalous property of teleporting to various locations when not being watched and with no individuals inside. These teleportation events occur every couple months and retrieval of the Apparatus is a major form of containment. A GPS tracker has been installed on the Apparatus to help in searching for it. It is believed that the Apparatus does not warp to random locations; most warp destinations are within the walls of Dimension A1, although the Apparatus has also been found next to the Eiffel Tower, inside the whale shark aquarium in Georgia, and a basement of a local tea brewery. The current theory is that the Apparatus prefers locations of cultural significance, although why this is the case or if its the case at all has yet to be definitely proven."/>,
			<Formats.Section title="Discovery" message="The Apparatus was recovered from an underwater cave in the Caribbean at a depth of 500 feet below sea level by a team of Normal scuba divers. It was surrounded by a cluster of five skeletons all dating to the 15th Century and of Roman descent. The skeletons showed signs of animal scavenging but no signs of struggle. In fact, it is completely unknown how the five individuals died. All that remains are the skitter and bite marks commonly associated with crustaceans."/>,
			<Formats.Section title="Kwalish" message={"The name \"Apparatus of Kwalish\" is based on an inscribing right above the driver's seat inside the ASCP. Translated, it states in ancient Roman:"}/>,
				<p style={{textAlign:"center"}}>
					And so he slumbers <br/>
					Beneath the waves <br/>
					The eternal glutton <br/>
					Kwalish <br/>
					Shall feed again <br/>
				</p>,
			<p>{"Kwalish is believe by experts to almost certainly be a god from some form of occult religion. Perhaps the creators of the Apparatus used the machine to escape from religious prosecution. Whether Kwalish refers to an actual otherwordly entity or was simply the product of creative minds is a harder to solve question, although some experts have postulated that it may refer to "}
			<NavLink to="/011">SCP011</NavLink>.
			</p>,
			<Formats.Section title="Controls" message="The front two seats of the Apparatus are right behind a set of 10 levers that each of one of two functions based on whether they are pulled up or down. With the exception of lever 6, all levers immediately return to their neutral position after being used."/>,
			<table className = "infoTable">
			  <tr>
				<th>Lever</th>
				<th>Up</th>
				<th>Down</th>
			  </tr>
			  <tr>
				<td>1</td>
				<td>Legs and tail extend , 
					allowing the apparatus to 
					walk and swim. </td>
				<td>Legs and tail retract, 
					reducing the apparatus's 
					speed to 0 and making 
					it unable to benefit from 
					bonuses to speed.</td>
			  </tr>
			  <tr>
				<td>2</td>
				<td>Forward window shutter 
					opens.  </td>
				<td>Forward window shutter 
					closes.</td>
			  </tr>
			  <tr>
				<td>3</td>
				<td>Forward window shutter 
					opens.  </td>
				<td>Forward window shutter 
					closes.</td>
			  </tr>			
			  <tr>
				<td>4</td>
				<td>Two claws extend from 
					the front sides of the 
					apparatus.   </td>
				<td>Both claws retract</td>
			  </tr>
			  <tr>
				<td>5</td>
				<td>Each extended claw 
					makes a 
					melee weapon attack. Damage dealt is comparable to that of a large blunt force object.   </td>
				<td>Each extended claw attempts to grapple a target (can select 2 different targets)</td>
			  </tr>
			  <tr>
				<td>6</td>
				<td>The apparatus walks or 
					swims forward. It will continue to do so until lever is manually returned to neutral position, although some control is needed to control steadiness.  </td>
				<td>The apparatus walks or 
					swims backward. It will continue to do so until lever is manually returned to neutral position, although some control is needed to control steadiness.  </td>
			  </tr>
			  <tr>
				<td>7</td>
				<td>The apparatus reinforces its hull.</td>
				<td>The apparatus stops moving and stores energy for 6 seconds. Afterwards, The apparatus begins moving and doubles its movement speed for the next 12 seconds. </td>
			  </tr>
			  <tr>
				<td>8</td>
				<td>The apparatus increases its mass, causing it to sink at a rate of 10 feet per second    </td>
				<td>The apparatus decreases its mass, causing it to rise at a rate of 10 feet per second  </td>
			  </tr>
			  <tr>
				<td>9</td>
				<td>Eyelike fixtures emit 
					bright light in a 30-foot 
					radius and dim light for 
					an additional 30 feet.</td>
				<td>The light turns off </td>
			  </tr>
			  <tr>
				<td>10</td>
				<td>The rear hatch unseals 
					and opens.</td>
				<td>The rear hatch closes 
					and seals. </td>
			  </tr>
			 </table>,
			 <br/>,
			 <Formats.MessageSubSection message="In addition to these controls, a small dial allows for turning of the vehicle as it moves."/>
			] 
			
									
	)
}
