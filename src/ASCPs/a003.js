import * as Formats from "../routes/format.js"

export function get(SCPnum)
{
	return (
			[<Formats.IntroSubSection title = "Dream Catchers" num={SCPnum} containment="Floor 2-B" objClass="Artificial" precursor="Non-anomalous Dream Catchers"
			mainImage="https://www.fairtradewinds.net/wp-content/uploads/2018/07/blue-401010-sm-sun-web-1200.png"
			caption="A seemingly normal dream catcher"
			intro="Dream catchers are ornaments originally created by some Native American nations and were protective charms that were meant to ward off evil. Though most dream catchers are ornamental and not anomalous, instances of anomalous dream catchers have been found, unwittingly created by artists. These anomalous variants allow users to communicate with others through dreams."/>,
			<Formats.Section title="Mechanism and Usage" message="It is unknown exactly what causes a dream catcher to become anomalous. All is known is that when hung at least 3 feet above a sleeping person, the person can establish links with other sleeping people under dream catchers. Magical humans have been shown to be able to manipulate these dream channels to allow only secure communication only with specific individuals. This causes dream communication to be one of the most secure forms of communication with the slight downside of requiring sleep."/>] 
									
	)
}
