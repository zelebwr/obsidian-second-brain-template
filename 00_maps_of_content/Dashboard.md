---
date_created: 2026-06-07T07:21
date_modified: 2026-08-15T05:46
cssclasses:
  - title-center
---

```contributionGraph
title: Daily Habit Tracker
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
enableMainContainerShadow: true
fillTheScreen: true
titleStyle:
  textAlign: center
  fontSize: 22px
  fontWeight: bold
cellStyle:
  minWidth: 19px
  minHeight: 19px
dataSource:
  type: ALL_TASK
  value: ""
  filters:
    - id: status_filter
      type: STATUS_IS
      value: COMPLETED
    - id: tag_filter
      type: CONTAINS_ANY_TAG
      value:
        - "#habit"
  dateField:
    type: TASK_PROPERTY
    value: completion
cellStyleRules:
  - id: default_b
    color: "#00ff2bff"
    min: 1
    max: "2"
```

```contributionGraph
title: Task Completion Tracker
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: 1
showCellRuleIndicators: true
enableMainContainerShadow: true
fillTheScreen: true
titleStyle:
  textAlign: center
  fontSize: 22px
  fontWeight: bold
cellStyle:
  minWidth: 19px
  minHeight: 19px
dataSource:
  type: TASK_IN_SPECIFIC_PAGE
  value: -"06_daily/Daily Habit Tracker.md"
  filters:
    - id: status
      type: STATUS_IS
      value: COMPLETED
  dateField:
    type: TASK_PROPERTY
    value: completion
cellStyleRules:
  - id: zero
    min: "1"
    max: "2"
    color: "#ebedf0"
  - id: low
    min: "2"
    max: "4"
    color: "#ffda66"
  - id: medium
    min: "4"
    max: "6"
    color: "#ff9800"
  - id: high
    min: "6"
    max: "8"
    color: "#e64a19"
  - id: 1775719993897
    min: "8"
    max: "99"
    color: "#e63c0fff"
    text: ""

```

---

# 🧑‍💼 Responsibilities

- Organisasi A
- Kepanitiaan B
- Lomba Y
- Event Z

---

# 📅 Due Today and ⏰ Overdue 

> [!todo] Due Today & Overdue
>
> ```tasks
> not done
> path does not include 03_resources
> path does not include 07_archives
> path does not include 99_meta
> (due before tomorrow) OR (scheduled before tomorrow)
> (no start date) OR (starts before tomorrow)
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created
> filter by function !task.file.property('exclude_tasks')
> filter by function task.file.property('status') !== 'cancelled'
> filter by function task.file.property('status') !== 'completed'
> filter by function !task.file.tags.includes('#archived')
> ```

# 🔥 Q1: Urgent & Important (Do)

> [!danger] Urgent & Important
>
> ```tasks
> not done
> path does not include 03_resources
> path does not include 07_archives
> path does not include 99_meta
> description includes #important
> (((due after today) OR (due today)) AND (due before in 4 days)) OR (((scheduled after today) OR (scheduled today)) AND (scheduled before in 4 days))
> (no start date) OR (starts before tomorrow)
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created
> filter by function !task.file.property('exclude_tasks')
> filter by function task.file.property('status') !== 'cancelled'
> filter by function task.file.property('status') !== 'completed'
> filter by function !task.file.tags.includes('#archived')
> ```

# 📜 Q2: Not Urgent & Important (Schedule)

> [!important] Not Urgent & Important
>
> ```tasks
> not done
> path does not include 03_resources
> path does not include 07_archives
> path does not include 99_meta
> description includes #important 
> (no due date) OR (due after in 3 days)
> (no scheduled date) OR (scheduled after in 3 days)
> (no start date) OR (starts before tomorrow)
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created
> filter by function !task.file.property('exclude_tasks')
> filter by function task.file.property('status') !== 'cancelled'
> filter by function task.file.property('status') !== 'completed'
> filter by function !task.file.tags.includes('#archived')
> ```

# 📞 Q3: Urgent & Not Important (Delegate)

> [!warning] Urgent & Not Important
>
> ```tasks
> not done
> path does not include 03_resources
> path does not include 07_archives
> path does not include 99_meta
> description does not include #important 
> (((due after today) OR (due today)) AND (due before in 4 days)) OR (((scheduled after today) OR (scheduled today)) AND (scheduled before in 4 days))
> (no start date) OR (starts before tomorrow)
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created 
> filter by function !task.file.property('exclude_tasks')
> filter by function task.file.property('status') !== 'cancelled'
> filter by function task.file.property('status') !== 'completed'
> filter by function !task.file.tags.includes('#archived')
> ```

# 🗑️ Q4: Not Urgent & Not Important (Delete or Last)

> [!example] Not Urgent & Not Important
>
> ```tasks
> not done
> path does not include 03_resources
> path does not include 07_archives
> path does not include 99_meta
> description does not include #important 
> (no due date) OR (due after in 3 days)
> (no scheduled date) OR (scheduled after in 3 days)
> (no start date) OR (starts before tomorrow)
> show backlink
> sort by due
> sort by function task.description.includes('#important') ? 0 : 1
> sort by priority
> sort by created 
> filter by function !task.file.property('exclude_tasks')
> filter by function task.file.property('status') !== 'cancelled'
> filter by function task.file.property('status') !== 'completed'
> filter by function !task.file.tags.includes('#archived')
> ```
