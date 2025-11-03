//@ts-nocheck
import { CollectionConfig } from 'payload'
import CustomMediaSelection from '@/components/CustomMediaSelection'

export const Articles: CollectionConfig = {
  slug: 'Articles',
  labels: {
    singular: 'Articles',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      label: 'Post Type In English',
      type: 'text',
      required: true,
    },
    {
      name: 'typeAr',
      label: 'Post Type In Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Post Title In English',
      type: 'text',
      required: true,
    },
    {
      name: 'titleAr',
      label: 'Post Title In Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'des',
      label: 'Post Description In English',
      type: 'text',
      required: true,
    },
    {
      name: 'desAr',
      label: 'Post Description In Arabic',
      type: 'text',
      required: true,
    },
    {
      name: 'PostDes',
      label: 'Post Long Description',
      type: 'richText',
    },
    {
      name: 'PostDesAr',
      label: 'Post Long Description In Arabic',
      type: 'richText',
    },
    {
      name: 'isImportant',
      label: 'Is Important',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark this post as important (maximum 3 allowed).',
      },
      hooks: {
        beforeChange: [
          async ({ value, req, originalDoc }) => {
            if (value === true) {
              const payload = req.payload
              const { totalDocs } = await payload.find({
                collection: 'Articles',
                where: {
                  and: [{ isImportant: { equals: true } }, { id: { not_equals: originalDoc?.id } }],
                },
                limit: 0,
              })

              if (totalDocs >= 3) {
                throw new Error('You can only have up to 3 important articles.')
              }
            }

            return value
          },
        ],
      },
    },
    {
      name: 'image',
      label: 'Post Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        components: {
          Field: CustomMediaSelection,
        },
      },
    },
    {
      name: 'HighlightImage',
      label: 'Background Image For Important Articles',
      type: 'upload',
      relationTo: 'media',
      admin: {
        components: {
          Field: CustomMediaSelection,
        },
      },
    },
  ],
}

//After this shocking booklet about how marketing agencies and some marketers scam people, I can guarantee you'll know who you're dealing with whether they're trying to trick you or genuinely want to help. Follow the booklet and pay attention to the useful information.  Topic One: Fake marketing by inflating follower counts  Don't get involved before you sign with any marketing company or marketer, hear my story. I remember when I had just started my business. I was super excited and my only concern was to get my social account in front of people as fast as possible.  Then an ad appeared saying we’ll grow your followers at the lowest prices, get 10,000 followers in no time. I thought to myself, what else do I need? This is exactly what I want.  I contacted them, paid, and a batch of followers came. The numbers looked amazing, but then what?  I started noticing something strange. My posts had no engagement, not even likes from those new followers. I was surprised and checked some of those accounts, and found they were from places like Zambia and Slovakia, following anything and everything.  That’s when I realized I had fallen into a trap.  First hit, the organic reach disappeared. The algorithms saw that my content had no engagement, so they stopped showing my posts to real people. In short, the content I worked hard on didn’t reach anyone.  Second hit, my ad campaigns went to waste because the fake audience meant ads were shown to people who had nothing to do with my niche and weren’t interested. Worse, they’re useless. They don’t buy, don’t promote you, and don’t even give feedback. Their presence is meaningless.  And now, you might hear people suggest buying an existing account. Yes, I heard that tip after my first mistake. Someone said, why not buy a ready-made account with 50k followers and start from there?  So I tried it and bought an account. But once I started posting my business content, engagement dropped and followers began unfollowing one after another. I realized the account used to be for completely different content. And the disaster, some followers were fake too. So the same problem came back: no real audience, no engagement, no trust.  Bottom line, don’t be fooled by numbers, and don’t spend a penny until you understand the game. Social media isn’t just numbers. It’s trust, engagement, and a real audience that walks with you step by step.  If you want to build properly, build from scratch and let someone who knows what they’re doing manage your marketing the right way, not people who sell you illusions and burn your money.
// بعد هذا الكتيب الصادم عن طرق احتيال شركات التسويق والمسوقين أقدر أضمنك إنك بتكون فاهم اللي قدامك سواء كان يحتال عليك أو هو بالفعل مسوق وحابب يفيدك تابع الكتاب وتمعن في المعلومات المفيدة  المحور الأول التسويق الزائف بزيادة متابعين وهميين  لا تتورط قبل ما تتفق مع أي شركة تسويق أو مسوق اسمع قصتي أذكر يوم كنت توّي بادئ مشروعي حماسي كان بالسماء وكل همي إني أطلع حسابي في السوشيال ميديا قدام الناس بأسرع وقت  هنا طاح قدامي إعلان نزيد لك متابعينك بأقل الأسعار نوصل لك 10 آلاف متابع في قلت بيني وبين نفسي وش أحتاج أكثر هذا اللي أبيه  راسلتهم دفعت لهم وجتني دفعة المتابعين فعلاً الأرقام طلعت خيالية بس بعدين  بدأت ألاحظ شيء غريب المنشورات ما عليها أي تفاعل ولا حتى لايكات من اللي توهم تابعوني استغربت دخلت على بعض الحسابات لقيتهم من دول زي زامبيا وسلوفاكيا ويتابعون أي شي وكل شي  وقتها عرفت إني طحت في الفخ  أول ضربة الأورجانيك راح الخوارزميات صارت تشوف إن المحتوى ما عليه تفاعل فتوقفت توصل منشوراتي للناس الحقيقية يعني بالعربي المحتوى اللي أتعب عليه ما قاعد يوصل لأحد  ثاني ضربة الحملات الإعلانية راحت في الهواء بسبب الجمهور الوهمي الإعلانات صارت تطلع لأشخاص ما لهم أي علاقة بمجالي ولا حتى مهتمين والأسوأ ما في أي فائدة منهم ما يشترون ما يسوقون لك ما يعطونك حتى رأي وجودهم زي قلتهم  والحين بتقولي فيه ناس يقترحون نشتري حسابات جاهزة إي سمعت هالنصيحة بعد ما تورطت بالمرة الأولى واحد قال لي ليه ما تشتري حساب جاهز فيه 50 ألف متابع وتبدأ منه  قلت خلني أجرب وشريت الحساب لكن أول ما بدأت أنزل محتوى يخص مشروعي التفاعل صار ينزل والمتابعين يبدون يلغون المتابعة واحد ورا الثاني عرفت إن الحساب هذا كان لمحتوى مختلف تمامًا عن مجالي والمصيبة بعض المتابعين كانوا برضو وهميين يعني رجعت للمشكلة من جديد لا جمهور فعلي لا تفاعل لا ثقة  خلاصة الكلام لا تنخدع بالأرقام ولا تدفع ريال قبل ما تفهم اللعبة السوشيال ميديا ما هي أرقام وبس هي ثقة تفاعل وجمهور حقيقي يمشي معك خطوة بخطوة  وإذا تبي تبني صح ابن من البداية وخل أحد فاهم يدير تسويقك بالطريقة الصحيحة مو ناس تبيع لك وهم وتخليك تحرق فلوسك

// {
// "createdAt": "2025-11-01T22:56:14.190Z",
// "updatedAt": "2025-11-03T17:11:13.962Z",
// "type": "blog post",
// "typeAr": "مدونة",
// "title": "Fake Marketing and the Illusion of Buying Followers",
// "titleAr": "التسويق الزائف بزيادة متابعين وهميين",
// "des": "Don’t be fooled by numbers social media isn’t about followers, it’s about real trust and engagement that grows step by step.",
// "desAr": "لا تنخدع بالأرقام السوشيال ميديا ما هي إلا ثقة وتفاعل جمهور حقيقي يمشي معك خطوة بخطوة.",
// "isImportant": true,
// "PostDes": "",
// "PostDesAr": "",
// "id": "6906900e4e3dc9579e52327c"
// }
