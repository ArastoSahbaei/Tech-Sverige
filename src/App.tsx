import { Discord } from "./components/Discord"
import background from './shared/images/background.jpg'
import './Global.css'
import { Description } from "./components/Description"

export const App = () => {
	return (
		<div className='applicationWrapper'>
			<img className='backgroundImg' src={background} alt={''} />
			<Description />
			<Discord />
		</div>
	)
}
