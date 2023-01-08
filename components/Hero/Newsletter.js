import BLOG from '@/blog.config'
import Link from 'next/link'
import Social from '../Common/Social.js'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { NewspaperIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'

const Collection = dynamic(
  () =>
    import('react-notion-x/build/third-party/collection').then(
      (m) => m.Collection
    ),
  { ssr: true }
)

const NewsletterHero = ({ blockMap }) => {
  const { locale } = useRouter()
  const t = lang[locale]

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-4/5 md:items-start mb-6 md:mb-0 md:text-left'>
          <NotionRenderer
            className='md:ml-0'
            recordMap={blockMap}
            components={{ Collection }}
          />
          <Social />
          <h2 className='text-xl pt-8 pb-4 font-light text-gray-500 dark:text-day'>
            {t.HERO.NEWSLETTER.SUBSCRIPTION_HEAD}
          </h2>

          <div className='flex flex-col sm:flex-row sm:justify-center gap-4'>
            <Link passHref href={BLOG.telegram.channelUrl} scroll={false}>
              <button className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='text-gray-600 dark:text-day w-7 h-7'
                  viewBox='0 0 24 24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z' />
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.NEWSLETTER.TG_CHANNEL}
                  </span>
                  <span className='font-medium'>
                    @{BLOG.telegram.channelName}
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='w-1/5'>
          <NewspaperIcon className='object-cover object-center text-gray-500 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default NewsletterHero
