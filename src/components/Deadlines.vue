<template>
  <div class="widgetRoot">
    <div class="black mt-4" style="overflow-y:scroll">
      <div class="title">SEE THE SCIENCE</div>

      <div class="message scroll">
The ClimateClock shows two numbers. The first, in red, is a timer, counting down how long it will take, at current rates of emissions, to burn through our “carbon budget” — the amount of CO2 that can still be released into the atmosphere while limiting global warming to 1.5°C above pre-industrial levels. This is our deadline, the time we have left to take decisive action to keep warming under the 1.5°C threshold. The second number, in green, is tracking the growing % of the world’s energy currently supplied from renewable sources. This is our lifeline. Simply put, we need to get our lifeline to 100% before our deadline reaches 0.
<br/><br/>
This clock follows the methodology of the carbon clock made by the Mercator Research Institute on Global Commons and Climate Change (MCC) which uses data from the recent IPCC Special Report on Global Warming of 1.5°C. The report states that starting from 2018, a carbon dioxide budget of 420 Gt of CO2 gives us a 67% chance to stay under 1.5°C of warming.

<br/><br/>
“The concept of the carbon budget is based on a nearly linear relationship between the cumulative emissions and the temperature rise. Nevertheless, this does not mean that the earth would necessarily be 1.5⁰C warmer at the very point in time when the remaining carbon budget for staying below the 1.5⁰C threshold was used up. This is due to, among others, the fact that there is a time lag between the concentration of emissions in the atmosphere and the impact thereof on the temperature”.¹

<br/><br/>
MCC also notes that their calculations assume “that the annual emissions of years to come will be close to those of the year 2017, while latest numbers show that emissions are still on the rise.” If this trend continues, the time we have to act will be reduced. Furthermore, it is unlikely that earth’s climate warms at a linear rate. For example, potential climatic tipping points have been identified in Earth’s physical climate system that would cause large and possibly irreversible transitions in the state of the climate.² These uncertainties are why the IPCC report states there is a 67% chance that the carbon budget will limit warming to 1.5°C.

<br/><br/>
The IPCC Special Report on Global Warming is largely based on a research paper called “Global Carbon Budget 2018” published in 2018 by Corinne Le Quéré et al.³ This paper estimates the carbon budget in the units of GtC.⁴

<br/><br/>
    Mercator Research Institute on Global Commons and Climate Change. “That’s How Fast the Carbon Clock Is Ticking.” MCC Carbon Clock. https://www.mcc-berlin.net/en/research/co2-budget.html (accessed September 22, 2019).

<br/><br/>
    Lenton, Timothy M., Hermann Held, Elmar Kriegler, Jim W. Hall, Wolfgang Lucht, Stefan Rahmstorf, and Hans Joachim Schellnhuber. "Tipping elements in the Earth's climate system." Proceedings of the national Academy of Sciences 105, no. 6 (2008): 1786-1793.

<br/><br/>
    Le Quéré, Corinne, Robbie M. Andrew, Pierre Friedlingstein, Stephen Sitch, Judith Hauck, Julia Pongratz, Penelope A. Pickers et al. "Global carbon budget 2018." Earth System Science Data (Online) 10, no. 4 (2018).

<br/><br/>
    IPCC, 2018: Global warming of 1.5°C. An IPCC Special Report on the impacts of global warming of 1.5°C above pre-industrial levels and related global greenhouse gas emission pathways, in the context of strengthening the global response to the threat of climate change, sustainable development, and efforts to eradicate poverty [V. Masson-Delmotte, P. Zhai, H. O. Pörtner, D. Roberts, J. Skea, P.R. Shukla, A. Pirani, W. Moufouma-Okia, C. Péan, R. Pidcock, S. Connors, J. B. R. Matthews, Y. Chen, X. Zhou, M. I. Gomis, E. Lonnoy, T. Maycock, M. Tignor, T. Waterfield (eds.)]. In Press.

        <br />
      </div>
<br/>
        <div class="link" style="text-align:center;"><a href="https://climateclock.world/science" class="link">Learn more on ClimateClock.World</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActInTime",
};
</script>

<style lang="scss" scoped>
.widgetRoot {
  font-family: "katwijk_monolight", "Lucida Console", Monaco, monospace;
  color: #00dd72;
}
.title {
  font-weight: bold;
}
.message {
  font-weight: normal;
}
.link {
  color: red;
  font-weight: bold;
}
div.scroll {
  overflow-x: hidden;
  overflow-y: auto;
  height:300px;
  padding: 20px;
}
</style>
