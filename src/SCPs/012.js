import * as Formats from "../routes/format.js"
import pic from  "../images/011.jpg"

export function get(SCPnum)
{
	return (	
			[<Formats.IntroSubSection title = "The Rust" num={SCPnum} containment="N/A" objClass="Apollyon" 
			mainImage="https://images.theconversation.com/files/159941/original/image-20170308-24187-jorwl4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
			caption="As an Apollyon level SCP, The Rust is potentially world ending."
			intro="The Rust is an anomalous substance that rapidly converts nearly any substance exposed to it to itself. Experiments with SCP002 have shown many dimensions that have been exposed to it."/>,
			<Formats.Section title="Description" message="The Rust is named after its color resembling a mix between human blood and iron oxide, also known as rust. It appears to spread throughout the multiverse infecting random realities and converting everything into itself. Very few substances are known to resist the Rust; strangely enough, SCP002 is one such exception. Due to the infectious nature of 012, it is expected to reach reality A0 at some point and cause a world-ending scenario. However, because the rate at which the Rust spreads is finite and there are an infinite number of realities, the chance of 012 reaching A0 in any given point in time is actually 0%, making 012 simultaneously the biggest and smallest threat to our existence."/>,
			<Formats.Section title="Countermeasures/Plan B" message="There is no known way to prevent the spread of the Rust nor any known way to eliminate or reverse its action. As a result, the only plan of action if the Rust were to ever reach A0 is a global evacuation. There is hope that continous research into SCP002, both its resistance to Rust as well as its ability to reliably travel between realities, can one day yield an appropriate response in the event of a world ending scenario."/>,
			<br/>,
			<Formats.MessageSubSection message="UPDATE: Head of Research Samuel Leebson has been working on reality stabilizer suits that may be able to offset the effects of the Rust in short-term exposure, although long-term exposure is still unpredictable."/>
			]
			)
}