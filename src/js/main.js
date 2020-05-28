class Blaze {

	static overlay() {
		const overlays = document.querySelectorAll(".overlay")
		overlays.forEach((overlay) => {
			const targetId = overlay.getAttribute("target")
			const target = document.getElementById(targetId)

			overlay.onmouseup = () => {
				target.classList.remove("active")
			}
		})
	}

	static slider() {
		const sliders = document.querySelectorAll(".slider")
		sliders.forEach((slider) => {
			const progress = document.createElement("span")
				progress.classList.add("progress")
				progress.style.width = slider.value / 10 + "%"

			slider.parentElement.appendChild(progress)

			slider.oninput = () => {
				const range = slider.parentElement.childNodes[3]
				range.style.width = slider.value / 10 + "%"
			}
		})
	}

	static combobox() {
		const comboboxes = document.querySelectorAll(".combobox")
		comboboxes.forEach((combobox) => {
			const icon = document.createElement("i")
			icon.classList.add("fas")
			icon.classList.add("fa-chevron-down")
			combobox.appendChild(icon)

			const select = combobox.childNodes[1]

			select.onfocus = () => {
				combobox.classList.add("active")
			}

			select.onblur = () => {
				combobox.classList.remove("active")
			}

			const optionsList = document.createElement("ul")
			optionsList.classList.add("options")

			const options = select.options
			const length = select.options.length - 1
			const selected = select.options.selectedIndex
			for(let i = 0; i <= length; i++){
				let option = options[i]
				let optionElement = document.createElement("li")
				optionElement.innerHTML = option.text

				if (i === selected) {
					optionElement.classList.add("selected")
				}

				optionsList.appendChild(optionElement)

				optionElement.onclick = () => {
					let previous = optionsList.childNodes[select.options.selectedIndex]
					previous.classList.remove("selected")

					select.options.selectedIndex = i
					optionElement.classList.add("selected")
				}
			}

			combobox.appendChild(optionsList)
		})
	}

	static button() {
		const likeBtns = document.querySelectorAll(".btn.like")
		likeBtns.forEach((btn) => {
			btn.onmouseup = () => {
				const like = btn.childNodes[0]
				like.classList.toggle("far")
				like.classList.toggle("fas")
			} 
		})

		const playBtn = document.querySelector(".btn.play")
		playBtn.onmouseup = () => {
			const icon = playBtn.childNodes[0]
			icon.classList.toggle("fa-play")
			icon.classList.toggle("fa-pause")
		}

		const soundBtn = document.querySelector(".btn.sound")
		soundBtn.onmouseup = () => {
			const icon = soundBtn.childNodes[0]
			icon.classList.toggle("fa-volume-up")
			icon.classList.toggle("fa-volume-mute")

			soundBtn.classList.toggle("active")
		}

		const activeBtn = document.querySelectorAll(".btn.random, .btn.repeat")
		activeBtn.forEach((btn) => {
			btn.onmouseup = () => {
				btn.classList.toggle("active")
			}
		})
	}

	static cursor() {
		const cursor = document.getElementById("cursor")

		window.onmousemove = (event) => {
			let x = event.pageX
			let y = event.pageY

			cursor.style.top = y + "px"
			cursor.style.left = x + "px"
		}
	}

	static click() {
		const cursor = document.getElementById("cursor")
		const touchableElements = document.querySelectorAll(".touchable")

		touchableElements.forEach((element) => {
			element.onmouseover = () => {
				cursor.classList.add("touching")
			}
			element.onmouseout = () => {
				cursor.classList.remove("touching")
			}
		})

		window.onmousedown = () => {
			cursor.classList.toggle("active")

			if(cursor.classList.contains("touching")) {
				const ripple = document.createElement("span")
				ripple.classList.add("ripple")
				cursor.appendChild(ripple)

				setTimeout(() => {
					cursor.removeChild(ripple)
				}, 1100)
			}
		}

		window.onmouseup = (event) => {
			cursor.classList.toggle("active")
		}
	}

	static action() {
		const triggers = document.querySelectorAll(".trigger")
		triggers.forEach((trigger) => {
			trigger.onmouseup = () => {
				const targetId = trigger.getAttribute("target")
				const target = document.getElementById(targetId)

				target.classList.toggle("active")
			}
		})
	}

	static footer() {
		const yearElement = document.getElementById("year")
		const date = new Date()
		const year = date.getFullYear()
		yearElement.innerText = year
	}

	static touchable() {
		const touchableElements = document.querySelectorAll("a, h1, h2, h3, h4, h5, h6, p, span, button, .slider-container, li, .combobox, input")
		touchableElements.forEach((element) => {
			element.classList.add("touchable")
		})
	}

	static dismiss() {
		const elements = document.querySelectorAll(".modal, .popup")
		elements.forEach((element) => {
			const icon = document.createElement("i")
			icon.classList.add("fas")
			icon.classList.add("fa-grip-lines")

			const dismiss = document.createElement("button")
			dismiss.appendChild(icon)

			dismiss.classList.add("btn")
			dismiss.classList.add("dismiss")

			element.appendChild(dismiss)

			dismiss.onmouseup = () => {
				element.parentElement.classList.remove("active")
			}
		})
	}
}

window.onload = () => {
	Blaze.dismiss()
	Blaze.combobox()
	Blaze.touchable()
	Blaze.slider()
	Blaze.button()
	Blaze.cursor()
	Blaze.click()
	Blaze.overlay()
	Blaze.action()
	Blaze.footer()
}