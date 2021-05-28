import { Discord } from "./components/Discord"
import background from './shared/images/background.jpg'
import './Global.css'
import { Description } from "./components/Description"
import { BackDrop } from "./components/backdrop/BackDrop"

export const App = () => {
	return (
		<div className='applicationWrapper'>
			<img className='backgroundImg' src={background} alt={''} />
			<Description />
			<Discord />
			<BackDrop />
		</div>
	)
}
