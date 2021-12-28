import * as Formats from "../routes/format.js"

export function get(SCPnum)
{
	return (	
			[<Formats.IntroSubSection title = "Bag of Devouring" num={SCPnum} containment="Floor 1-BM" objClass="Safe" 
			mainImage="https://www.dndbeyond.com/avatars/thumbnails/7/118/1000/1000/636284707844421733.jpeg"
			caption="The original specimen, from which all Bags of Holding are derived."
			intro="Originally found in an old pawn shop, the Bag of Devouring is a seemingly normal tote bag with a face design on its outside. There appears to be nothing in the bag but a dark void, and any object dropped in will disappear after falling for roughly 10 seconds. In reality, the bag is the maw of a gigantic extradimensional creature that devours any object put in the bag. Like many SCPs, it is most likely an opportunistic infovorous virus, SCPs that grow by consuming objects and then use what it consumes to change form and consume more objects. In the case of 001, the bag exploits the human behaviour of putting things into bags to consume objects, which can allow it to learn more about humans and thus evolve into a form that consumes even more objects."/>,
			<Formats.Section title = "Containment" message="SCP001 is easy to contain as its only threat is consuming objects placed in it;if no objects are placed within, it may as well be a normal bag. Therefore, it can be stored in a standard containment unit."/>,
			<Formats.Section title = "Impact on Artificial SCPs" message = "ASCPs, or Artificial SCPs, are fundamental to the Foundation's field of operations and there is perhaps none more impactful than ASCP010, the Bag of Holding. Unlike the Bag of Devouring, the Bag of Holding leads to a safe pocket dimension. Any object placed into the Bag of Holding is safe and can be easily retrieved as if it were a normal bag, making the Bag of Holding effectively an infinite space for storage."/>,
			<br/>,
			<a href = "/DND-SCP-Campaign/a010">More info here</a>,
			<br/>,
			<p></p>]
			)
}