export const breakingHeaderPattern = /^(\w*)(?:\((.*)\))?!: (.*)$/

// todo: drop, CommitParser currently handles this case
export function addBangNotes (commit) {
  const match = commit.header.match(breakingHeaderPattern)
  if (match && commit.notes.length === 0) {
    const noteText = match[3] // the description of the change.

    return [
      {
        title: 'BREAKING CHANGE',
        text: noteText
      }
    ]
  }

  return commit.notes
}

export const shortCodeMap = { 
  ':art:': '🎨',
  ':zap:': 'icon:bolt[]',
  ':fire:': '🔥',
  ':bug:': '🐛',
  ':ambulance:': 'icon:ambulance[]',
  ':sparkles:': '✨',
  ':memo:': '📝',
  ':rocket:': '🚀',
  ':lipstick:': '💄',
  ':tada:': '🎉',
  ':white_check_mark:': 'icon:check[]',
  ':lock:': 'icon:lock[]',
  ':closed_lock_with_key:': '🔐',
  ':bookmark:': '🔖',
  ':rotating_light:': '🚨',
  ':construction:': '🚧',
  ':green_heart:': '💚',
  ':arrow_down:': 'icon:arrow-down[]',
  ':arrow_up:': 'icon:arrow-up[]',
  ':pushpin:': '📌',
  ':construction_worker:': '👷',
  ':chart_with_upwards_trend:': '📈',
  ':recycle:': 'icon:recycle[]',
  ':heavy_plus_sign:': 'icon:plus[]',
  ':heavy_minus_sign:': 'icon:minus[]',
  ':wrench:': '🔧',
  ':hammer:': '🔨',
  ':globe_with_meridians:': '🌐',
  ':pencil2:': 'icon:pencil[]',
  ':poop:': '💩',
  ':rewind:': '⏪',
  ':twisted_rightwards_arrows:': '🔀',
  ':package:': 'icon:dropbox[]',
  ':alien:': '👽️',
  ':truck:': '🚚',
  ':page_facing_up:': '📄',
  ':boom:': '💥',
  ':bento:': '🍱',
  ':wheelchair:': 'icon:wheelchair-alt[]',
  ':bulb:': '💡',
  ':beers:': '🍻',
  ':speech_balloon:': '💬',
  ':card_file_box:': 'icon:folder-open-o[]',
  ':loud_sound:': '🔊',
  ':mute:': '🔇',
  ':busts_in_silhouette:': '👥',
  ':children_crossing:': '🚸',
  ':building_construction:': 'icon:building-o[]',
  ':iphone:': '📱',
  ':clown_face:': 'icon:hand-lizard-o[]',
  ':egg:': 'icon:circle-thin[]',
  ':see_no_evil:': '🙈',
  ':camera_flash:': 'icon:camera-retro[]',
  ':alembic:': 'icon:glass[]',
  ':mag:': 'icon:search[]',
  ':label:': 'icon:tag[]',
  ':seedling:': '🌱',
  ':triangular_flag_on_post:': '🚩',
  ':goal_net:': 'icon:barcode[]',
  ':dizzy:': '💫',
  ':wastebasket:': 'icon:trash[]',
  ':passport_control:': '🛂',
  ':adhesive_bandage:': 'icon:medkit[]',
  ':monocle_face:': 'icon:eye[]',
  ':coffin:': 'icon:snapchat-ghost[]',
  ':test_tube:': 'icon:crosshairs[]',
  ':necktie:': '👔',
  ':stethoscope:': 'icon:stethoscope[]',
  ':bricks:': 'icon:square[]',
  ':technologist:': '🧑‍💻',
  ':money_with_wings:': '💸',
  ':thread:': 'icon:chain[]',
  ':safety_vest:': 'icon:fire-extinguisher[]'
};



export function replaceShortCodes (subject) {
  Object.keys(shortCodeMap)
  .map((key) => [key, shortCodeMap[key]])
  .forEach(function(item) {
    subject = subject.replaceAll(item[0], item[1]);
  });
  return subject;
}
