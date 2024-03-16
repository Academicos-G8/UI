import { cn } from '@/utils/cn'
import { Tabs as TabsPrimitive, TabsRootProps } from '@ark-ui/react'
import { VariantProps, tv } from 'tailwind-variants'

const tabsStyles = tv({
  slots: {
    root: ['flex w-full flex-col gap-6'],
    trigger: [
      'text-text-secondary relative h-10 w-full rounded text-xs font-bold',
      'aria-selected:text-text-primary z-0',
    ],
    list: [
      'bg-low relative z-0 flex shrink-0 overflow-auto p-1',
      'border-secondary rounded-lg border',
    ],
    content: ['w-full'],
    indicator: [
      'bg-high left-[--left] top-[--top] -z-10 h-[--height] w-[--width] rounded',
    ],
  },
})

export type TabsProps = VariantProps<typeof tabsStyles> & TabsRootProps

export default function Tabs({ className, ...props }: TabsProps) {
  const classes = tabsStyles()

  return (
    <TabsPrimitive.Root
      className={cn(classes.root(), className)}
      defaultValue='products'
      {...props}
    >
      <TabsPrimitive.List className={classes.list()}>
        <TabsPrimitive.Trigger value='products' className={classes.trigger()}>
          PRODUCTS
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger value='others' className={classes.trigger()}>
          OTHERS
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Indicator className={classes.indicator()} />
      </TabsPrimitive.List>

      <TabsPrimitive.Content value='products' className={classes.content()}>
        React Content
      </TabsPrimitive.Content>

      <TabsPrimitive.Content value='others' className={classes.content()}>
        Vue Content
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  )
}
