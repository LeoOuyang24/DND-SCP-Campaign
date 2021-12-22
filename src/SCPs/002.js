import * as Formats from "../routes/format.js"

function Dimension(props)
{
	 const mystyle = {
		backgroundColor: "RGB(238, 187, 153)",
		paddingLeft: "5px",
		paddingRight: "5px",
		marginLeft: "10%",
		marginBottom: "1%",
		border: "1px solid black",
		width: "50%"
    };
	const Dot = (props) =>
	{
		return (
			<span style={{
				  height: "10px",
				  width: "10px",
				  backgroundColor: props.black ? "RGB(0,0,0)" : "RGB(128,128,128)",
				  borderRadius: "50%",
				  display: "inline-block"
				}}>
			</span>
		)
	}
	const code = (num) => {
		let arr = []
		for (let i = 0; i < num.length; ++i)
		{
			if (num[i] === '0')
			{
				arr.push(<Dot black = {false}/>)
			}
			else if (num[i] === '1')
			{
				arr.push(<Dot black = {true}/>)
			}
		}
		return arr
	}
	return (
	<div className = "dimension" style={mystyle}>
		<h4 style={{margin:"0px"}}>{props.name}</h4>
		{code(props.code)}
		<p style={{margin:"0px", marginLeft: "10px"}}> {props.message}</p>
	</div>
	)
}

export function get(SCPnum)
{
	return ([
				<Formats.IntroSubSection title = "The Transdimensional Elevator" num={SCPnum} containment="Floor 23 (Class 9 Security Clearance required)" objClass="Safe" 
				mainImage="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNzk5OTk2MTI3/ask-2-history-who-invented-the-elevator-istock_000017202421xlarge-2.jpg"
				caption="The interior and exterior of SCP002."
				intro="SCP002 represents the utmost extent of the Foundation's knowledge of inter-reality travel. It is the only known object in any dimension that fulfills all of the Kurchoff Interdimensional Vehicle requirements: "/>,
				<Formats.ListSubSection ordered={true} list={[
					"Vehicle should be safe to use and present no harm to its user",
					"Vehicle's destination should be configurable to most dimensions",
					"Vehicle should reach at least one dimension in a reasonable amount of time (less than 1/10 a human life span)",
					"Vehicle should transcend dimensions without causing harm to itself"]}/>,
				<Formats.Section title="Description" message={"SCP002 appears to be a normal stainless steel elevator developed by Ayene Engineering. Closer examination shows that it possesses a control panel that seems to change randomly every time the doors close as well as a single button on the outside that says \"Next Level\". Unlike a traditional elevator, SCP002 does not need a cable or any physical object to hold it up. Rather, it exists as just an elevator box that then seemingly sinks through the ground when traveling. Tests have also shown that it is highly resistant to physical damage, far more than any elevator of similar build. "} />,
				<Formats.Section title = "Containment" message="SCP002 has no way of harming individuals directly although inexperienced users may inadvertently transport themselves to dangerous alternate dimensions with no way back. As a result, only those with Class 9 Security Clearance or Elevator Proficiency clearance may operate or research the object."/>,
				<Formats.Section title="Discovery" message="SCP002 was recovered from a now defunct Ethiopian hotel. It was decomissioned shortly after its installation in 2014 due to repeated incidents of personnel disappearing within it. Foundation personnel were notified when the elevator's strange interior controls made national headlines in Ethiopia, with the disappearances that followed adding fuel to the fire. When recovered, it was sitting in storage. A mass amnestics campaign was launched to erase any trace of the SCP."/>,
				<Formats.Section title = "Impact on Artificial SCPs" message = "Research into SCP002 is directly responsible for the creation of ASCP001, Constant Time Elevators, which can move within the Foundation Research Time in 5 seconds, regardless of how many floors it has to transverse. However, how it moves between realities has yet to be elucidated."/>,
				<br/>,
				<a href = "/DND-SCP-Campaign/a010">More info here</a>,
				<br/>,
				<p></p>,
				<Formats.Section title="Research" message="SCP002's ability to move between dimensions, seemingly regardless of distance, is an unparalleled first in the world of anomomalies. Cracking the mechanism between SCP002 is the holy grail of paranormal research, on par with protein folding and P=NP in other fields of science. Significant time has been devoted into understanding how to configure SCP002's settings to consistently reach the same dimensions."/>,
				<br/>,
				<Formats.MessageSubSection message="On August 10 2014, the SCP002 research program was terminated by Head of Security Dr. Woodheart, see below."/>,
				<h3>Dimensions Visited</h3>,
				<Dimension name="D1000" code = "101100" message="An inhospitable realm of highly reactive gases. Visiting resulted in 10 casualties of the original 15 unit crew"/>,
				<Dimension name="A5375-99" code = "101000100101010" message = "A completely empty grassy plane that seems identical to the Windows XP default desktop background. Plane only stretched about as far as the picture in the desktop background did and the rest dropped into an endless void"/>,
				<Dimension name="Y2346530" code = "10101010110010" message="A cold world that seems to mostly follow A0 physics and even A0 time. Researchers staked out for 1 week before being forced to retreat due to gravity flipping."/>,
				<Dimension name="Z2238472" code="00000000000000000000000000000000000" message="An endless void, similar to the inside of instances of ASCP010, Bag of Holding"/>,
				<Dimension name="A2374863" code = "11111111111111111111111111111111111" message = {"A chaotic world inhabited by beings calling themselves the \"Conquerors/Brutalists/Devourers\". Creatures were hexapedal with a mix of reptilian and insectoid features and bled green. Only one researcher made it back to the foundation, before being consumed from the inside out by a cat-sized maggot-like creature."}/>,
				<Dimension name="J2623" code = "010100110110000101100110011" message={"<DATA REWRITTEN BY HEAD OF SECURITY DR. WOODHEART ON AUGUST 10 2014> THE SOURCE OF A MASSIVE INFOVOROUS ENTITY. DO NOT VISIT UNDER ANY CIRCUMSTANCES"}/>,
				<Formats.Section title="Termination" message="After discovery of Dimension J2623, Dr. Woodheart indefinitely terminated the SCP002 research program with no set continuation date, citing dangers of recklessly visiting random dimensions. All researchers except Woodheart were put through an amnestic program to forget the contents of J2623. SCP002 has lain unpowered since."/>
				

			])
}