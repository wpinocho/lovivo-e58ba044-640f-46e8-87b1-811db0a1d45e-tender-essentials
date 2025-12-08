import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'

/**
 * EDITABLE UI COMPONENT - NewbornChecklist
 * 
 * Displays essential newborn checklist for hospital preparation
 */

interface ChecklistItem {
  category: string
  items: string[]
}

const checklistData: ChecklistItem[] = [
  {
    category: "For Baby",
    items: [
      "Newborn diapers & wipes",
      "3-4 onesies (newborn size)",
      "2-3 sleepers",
      "Going-home outfit",
      "Blankets (receiving & swaddle)",
      "Baby bottles (if not nursing)"
    ]
  },
  {
    category: "For Mom",
    items: [
      "Nursing bras & pads",
      "Postpartum recovery essentials",
      "Comfortable robe",
      "Extra underwear",
      "Toiletries",
      "Comfortable going-home outfit"
    ]
  },
  {
    category: "Important Items",
    items: [
      "Hospital documents & ID",
      "Insurance cards",
      "Birth plan (if applicable)",
      "Phone chargers",
      "Snacks",
      "Camera"
    ]
  }
]

export const NewbornChecklist = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-foreground mb-4">
            Hospital Bag Checklist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make sure you're prepared with everything you need for those precious first days
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {checklistData.map((section, idx) => (
            <Card key={idx} className="gentle-shadow border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}